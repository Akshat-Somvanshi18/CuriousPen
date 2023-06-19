import React from "react";
import { useBlogContext } from "../context/BlogContext";
import Blog from "./Blog";

export default function BlogHome(props) {

  const { isLoading, blogs} = useBlogContext();

//   ----------------LOADING FUNCTIONALITY-----------------
  if (isLoading === true) {
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
    <div className="d-flex align-items-center justify-content-evenly flex-wrap pt-5">
      {blogs.map((currentElement) => {
        return (
          <Blog
            key={currentElement.id}
            {...currentElement}
            authenticated={props.authenticated}
            setAlertMsg={props.setAlertMsg}
            setAlertColor={props.setAlertColor}
          />
        );
      })}
    </div>
  );
}
