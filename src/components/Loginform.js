
import React from "react";
import "./Loginform.css";
import { Navigate } from "react-router-dom";
const myComponentStyle = {  
  border: "none",
  backgroundColor: "rgb(235, 233, 233)",
  width: "70%",
  borderRadius: 4,
  position: "relative",
  left:"49px",
  text: "center",
  justifyContent: "center",
  margin: "8px",
  padding: "0.8em",
  // fontSize: "0.65em",
  
}  
const Loginform = () => {
    const [goToContact,setGoToContact]=React.useState(false);
  if (goToContact) {
     return <Navigate to ="/Loginform2" />
     
  }

  return (
    <div className="cover">
      <div className="alt-vec">
        <div className="left-vec"></div>
        <div className="right-vec"></div>
      </div>
      <div className="front-img"></div>
      <h1>Emergency Person Details</h1>
      <div className="inp">
        <input type="text"  placeholder="First Name" style={myComponentStyle}/>
        <input type="password" placeholder="Last Name" style={myComponentStyle}/>
        <input type="password" placeholder="Relationship With User" style={myComponentStyle} />
        <input type="password" placeholder="Email Adress"style={myComponentStyle} />
      </div>

      <div className="log-btn" onClick={() => {setGoToContact(true);}}>Next</div>
    </div>
  );
};

export default Loginform;
