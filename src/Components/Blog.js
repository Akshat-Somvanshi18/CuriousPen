import React , {useState} from "react";
import { auth, db } from "../firebase-config";
import { deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
const Blog = (currentElement, authenticated , setAlertMsg, setAlertColor) => {

  const { author, title, postText, id } = currentElement;
   
  const [temp,setTemp] = useState(localStorage.getItem("loading2"));

  // ---------------DELETE BLOG FUNCTION--------------------
  const deleteBlog = async (id) => {

    localStorage.setItem("loading2",true);
    setTemp(true);

    const blogdelete = doc(db, "blogPosts", id);
    
    await deleteDoc(blogdelete);
    localStorage.setItem("loading2",false);
    setTemp(false);
    window.location.reload(false);
    
    localStorage.setItem("alertMsg","Your Blog has been successfully deleted!");
    setAlertMsg("Your Blog has been successfully deleted!");

    localStorage.setItem("alertColor","lightgreen");
    setAlertColor("lightgreen");


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



  // --------------------------------------------------BLOG CARD-----------------------------------------------
  return (
    <>
    <section className="">
      <section className="d-flex flex-column align-items-center blog-card shadow rounded-5 p-3 m-3 text-center">
        <img src="./Logo.png" id="logo-blog-card" />
        <h3 className="pt-2">{title.slice(0,23)}</h3>
        <p className="blog-card-desc">{postText.slice(0, 180)}...</p>
        <p className="fw-bold">@{author.name}</p>
        <div>
          <Link
            to={`/DetailedBlog/${id}`}
            className="btn btn-outline-success me-2"
          >
            Read Blog
          </Link>
          {authenticated &&
            auth.currentUser &&
            auth.currentUser.uid == author.id && (
              <button
                className="btn btn-outline-danger ms-2"
                onClick={() => deleteBlog(id)}
              >
                Delete blog
              </button>
            )}
        </div>
      </section>
      </section>
    </>
  );
};

export default Blog;
