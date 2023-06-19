import React, { useEffect } from "react";
import { useBlogContext } from "../context/BlogContext";
import { useParams } from "react-router-dom";
import { auth, db } from "../firebase-config";
import { deleteDoc, doc } from "firebase/firestore";

const DetailedBlog = (props) => {
  const { ID } = useParams();
  const { isSingleLoading, singleBlog, getSinglePost } = useBlogContext();

  useEffect(() => {
    getSinglePost(ID);
  }, []);

  const { title, postText, author } = singleBlog;

  // ------------------LOADING FUNCTIONALITY---------------------
  if (isSingleLoading === true) {
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

  // ----------DELETE BLOG FUNCTION------------------
  const deleteBlog = async (id) => {
    const blogdelete = doc(db, "blogPosts", id);
    await deleteDoc(blogdelete);
    window.location.reload(false);
    localStorage.setItem("alertMsg","Your Blog has been successfully deleted!");
    props.setAlertMsg("Your Blog has been successfully deleted!");
    localStorage.setItem("alertColor","lightgreen");
    props.setAlertColor("lightgreen");
  };

  return (
    <>
      <section className="detailed-blog text-center border-bottom my-3 border-success py-5 mx-5">
        <h1 className="py-3">{title}</h1>
        <p>{postText}</p>
        {author && author.name && <p className="fw-bold">@{author.name}</p>}
        {props.authenticated &&
          author &&
          auth.currentUser &&
          auth.currentUser.uid === author.id && (
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteBlog(ID)}
            >
              Delete Blog
            </button>
          )}
      </section>
    </>
  );
};

export default DetailedBlog;
