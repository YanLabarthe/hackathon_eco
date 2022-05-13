
import VincentFile from "@pages/VincentFile";
import JonathanFile from "@pages/JonathanFile";
import JonathanData from "@pages/JonathanData";
import { Routes, Route } from "react-router-dom";
import PhotoMode from "@pages/PhotoMode";
import { useState } from "react";
import Iphone from "@pages/Iphone";
import Home from "@pages/Home";
import Marqueur from "@pages/Marqueur";
import Chargeur from "@pages/Chargeur";
import "../index.css";

import Shoes from "@pages/Shoes";
import Adaptateur from "@pages/Adaptateur";
import RecycleVincent from "@pages/RecycleVincent";


import Userprofile from "@pages/Userprofile";
import RecycleShoes from "@pages/RecycleShoes";
import RecycleIphone from "@pages/recycleIphone";

function App() {
  const [photo, setPhoto] = useState("");
  return (
    <div className="homepage">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vincentFile" element={<VincentFile />} />
        <Route path="/jonathanFile" element={<JonathanFile />} />
        <Route path="/jonathanData" element={<JonathanData />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/marker" element={<Marqueur />} />
        <Route path="/photomode" element={<PhotoMode photo={photo} setPhoto={setPhoto}/>} />
        <Route path="/iphone" element={<Iphone photo={photo}  />} />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/" element={<Home />} />
        <Route path="/photoMode" element={<PhotoMode />} />
        <Route path="/chargeur" element={<Chargeur />} />
        <Route path="/adaptateur" element={<Adaptateur />} />
        <Route path="/reclyclevincent" element={<RecycleVincent />} />
        <Route path="/recycleshoes" element={<RecycleShoes/>}     />
        <Route path="/recycleiphone"  element={<RecycleIphone/>}/>
      </Routes>
    </div>
  );
}
export default App;
