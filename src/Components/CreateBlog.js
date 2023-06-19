import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

export default function CreateBlog(props) {

  const [temp,setTemp]=useState(localStorage.getItem("loading1"));

  useEffect(() => {
    if (!props.authenticated) {
      navigate("/Login");
    }
  });

  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  let navigate = useNavigate();
  const postsCollectionRef = collection(db, "blogPosts");

  // -------------CREATE BLOG FUNCTION------------------
  const createBlogPost = async () => {

    if(title==="")
    {
      localStorage.setItem("alertMsg","Enter the Title of Your Blog!");
      props.setAlertMsg("Enter the Title of Your Blog!");
      localStorage.setItem("alertColor","lightyellow");
      props.setAlertColor("lightyellow");

    }
    else if(postText==="")
    {
      localStorage.setItem("alertMsg","Enter Your Blog!");
      props.setAlertMsg("Enter Your Blog!");
      localStorage.setItem("alertColor","lightyellow");
      props.setAlertColor("lightyellow");
    }
    else{
      localStorage.setItem("loading1",true);
      setTemp(true);
      await addDoc(postsCollectionRef, {
        title: title,
        postText: postText,
        author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      });
      localStorage.setItem("loading1",false);
      setTemp(false);
      
      navigate("/");
      window.location.reload(false);
      localStorage.setItem("alertMsg","Your Blog has been successfully posted!");
      props.setAlertMsg("Your Blog has been successfully posted!");
      localStorage.setItem("alertColor","lightgreen");
      props.setAlertColor("lightgreen");
    }

  };

  if(temp===true)
  {
    return (
      <div className="loader d-flex flex-column align-items-center justify-content-center my-5">
        <div className="p-4 border rounded-circle shadow">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <span className="mt-4 fw-bold">... Loading ...</span>
      </div>
    );
  }

  return (
    <>
      <div className="create-div d-flex flex-column mx-auto align-items-center m-5 rounded-5 p-5 shadow">
        <h2 className="text-center">Unleash Your Creativity</h2>
        <h2 className="text-center">
          Start Your <span className="text-success">Blog</span> Today!
        </h2>
        <input
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          placeholder="Title Of Your Blog"
          className="title-blog p-2 m-3 text-center rounded-4"
        ></input>
        <textarea
          type="text"
          onChange={(event) => {
            setPostText(event.target.value);
          }}
          placeholder="Type Your Blog"
          className="type-blog p-2 m-3 text-center rounded-4"
        ></textarea>
        <button className="btn btn-outline-success" onClick={createBlogPost}>
          Submit Blog
        </button>
      </div>
    </>
  );
}
