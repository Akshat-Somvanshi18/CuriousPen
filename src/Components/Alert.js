import React from "react";

const Alert = (props) => {

  setTimeout(() => {
    localStorage.setItem("alertMsg","");
    props.setAlertMsg("");
  }, 4000);

  return (
    <>
      <div className="alert-main-div">
        {props.alertMsg && props.alertMsg != "" && (
          <div className="alert-div" style={{backgroundColor:`${props.alertColor}`}}>{props.alertMsg}</div>
        )}
      </div>
    </>
  );
};

export default Alert;
