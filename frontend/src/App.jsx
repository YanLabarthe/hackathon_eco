import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import PhotoMode from "@pages/PhotoMode";
import { useState } from "react";
import Iphone from "@pages/Iphone";
import "../index.css";
import Userprofile from "@pages/Userprofile";

function App() {
  const [photo, setPhoto] = useState("");
  return (
    <div className="homepage">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photomode" element={<PhotoMode photo={photo} setPhoto={setPhoto}/>} />
        <Route path="/iphone" element={<Iphone photo={photo}  />} />
        <Route path="/userprofile" element={<Userprofile />} />
      </Routes>
    </div>
  );
}

export default App;
