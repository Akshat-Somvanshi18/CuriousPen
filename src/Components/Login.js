import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  let navigate = useNavigate();

  // -------LOGIN FUNCTION-------------------------
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("authenticated", true);
      props.setAuthenticated(true);
      localStorage.setItem("alertMsg","You have been successfully logged in!");
      props.setAlertMsg("You have been successfully logged in!");
      localStorage.setItem("alertColor","lightgreen");
      props.setAlertColor("lightgreen");
      navigate("/BlogHome");
    });
  };
  return (
    <>
      <h3 className="text-center pt-3">
        Step into the <span className="text-success">Blogosphere</span>
      </h3>
      <h3 className="text-center"><span className="text-success">Log In</span> to Craft Your Own Blog!</h3>
      <div className="login-div d-flex flex-column align-items-center my-5 mx-auto rounded-5 p-5 shadow">
        <img src="./login-img.png" id="login-img" alt="login-img" />
        <h1>Log In</h1>
        <p>Log In With Google</p>
        <button
          className="btn btn-light shadow rounded-5 border border-success text-center login-btn"
          onClick={signInWithGoogle}
        >
          <img src="./google.png" id="google-img" className="mx-2" />
        </button>
      </div>
    </>
  );
}
