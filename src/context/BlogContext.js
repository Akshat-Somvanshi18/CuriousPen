import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";

import { auth, db } from "../firebase-config";
import reducer from "../reducer/blogReducer";

const AppContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  blogs: [],
  isSingleLoading: false,
  singleBlog: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  var blogList = [];
  var obj = {};
  var temp = "";

  const postsCollectionRef = collection(db, "blogPosts");
  const getPosts = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const data = await getDocs(postsCollectionRef);
      for (let i = 0; i < data.docs.length; i++) {
        temp = data.docs[i].id;
        obj = data.docs[i].data();
        obj.id = temp;
        blogList.push(obj);
      }
      console.log(blogList);
      dispatch({ type: "MY_BLOG_DATA", payload: blogList });
    } catch (error) {
      dispatch({ type: "MY_BLOG_ERROR" });
    }
  };
  const getSinglePost = async (ID) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const c1 = doc(db, "blogPosts", ID);
      const c2 = await getDoc(c1);
      const c3 = c2.data();
      dispatch({ type: "MY_SINGLE_BLOG_DATA", payload: c3 });
    } catch (error) {
      dispatch({ type: "MY_SINGLE_BLOG_ERROR" });
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSinglePost }}>
      {children}
    </AppContext.Provider>
  );
};

const useBlogContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useBlogContext };
