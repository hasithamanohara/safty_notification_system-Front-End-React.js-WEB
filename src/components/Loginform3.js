import React from "react";
import { Navigate } from "react-router-dom";
import "./Loginform3.css";

const myComponentStyle = {  
  border: "none",
  backgroundColor: "rgb(235, 233, 233)",
  width: "17%",
  borderRadius: 5,
  position: "relative",
  left:"15px",
  justifyContent: "center",
  margin: "10px",
  padding: "1.0em",
  fontSize: 16,
  
} 

const Loginform3= () => {
  const [goToContact, setGoToContact] = React.useState(false);
  if (goToContact) {
    return <Navigate to="/Loginform1"/>;
  }
  return (
    <div className="cover">
      <div className="alt-vec">
        <div className="left-vec"></div>
        <div className="right-vec"></div>
      </div>
      <div className="front-img"></div>
      <div className="text-con">
        <h1>OTP Verification</h1>
        <p>Enter the otp sent to +94 702536347</p>
       <div>
        <input type="text" style={myComponentStyle}  />
        <input type="text" style={myComponentStyle}/>
        <input type="text" style={myComponentStyle}/>
        <input type="text" style={myComponentStyle} />
       </div>
       <p className="resend">Didn't recieve OTP? <a href="Resend" style={{fontWeight:"bold"}}>RESEND</a></p>
      </div>
      <div className="log-btn" onClick={() => {setGoToContact(true);}} >Verify</div>
    </div>
  );
};

export default Loginform3;