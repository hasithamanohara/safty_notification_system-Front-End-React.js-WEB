
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loginform from "./components/Loginform";
import Loginform2 from "./components/Loginform2";
import Loginform3 from "./components/Loginform3";

function App() {
  return (
    <div className="page">
      
      <Router>
        <Routes>
          <Route path="/" element={<Loginform/>}></Route>
          <Route path="/Loginform2" element={<Loginform2/>}></Route>
          <Route path="/Loginform3" element={<Loginform3/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
