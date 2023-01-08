import React from "react";
import "./Loginform2.css";
import { Navigate } from "react-router-dom";
const myComponentStyle = {  
  border: "none",
  backgroundColor: "rgb(235, 233, 233)",
  width: "75%",
  borderRadius: 5,
  position: "relative",
  left:"0px",
  text: "left",
  justifyContent: "center",
  margin: "10px",
  padding: "1.0em",
  fontsize: "0.45em",
  
}  
const Loginform2 = () => {
  const [goToContact, setGoToContact] = React.useState(false);
  if (goToContact) {
    return <Navigate to="/Loginform3" />;
  }

  return (
    <div className="cover">
      <div className="alt-vec">
        <div className="left-vec"></div>
        <div className="right-vec"></div>
      </div>
      <div className="front-img"></div>
      <div className="text-con">
        <h1>Enter Emergency Number</h1>
        <p>We will send you the 4 digit verfication code</p>
        <input type="text" placeholder="Enter Phone Number" style={myComponentStyle} />
      </div>
      <div className="log-btn" onClick={() => {setGoToContact(true);}}>Send OTP</div>
    </div>
  );
};

export default Loginform2;
