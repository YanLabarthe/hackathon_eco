
import VincentFile from "@pages/VincentFile";
import JonathanFile from "@pages/JonathanFile";
import JonathanData from "@pages/JonathanData";
import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import PhotoMode from "@pages/PhotoMode";
import { useState } from "react";
import IphoneDouze from "@pages/IphoneDouze";

import IphoneTreize from "@pages/IphoneTreize";
import Marqueur from "@pages/Marqueur";
import Chargeur from "@pages/Chargeur";
import "../index.css";
import Shoes from "@pages/Shoes";
import Adaptateur from "@pages/Adaptateur";
import RecycleVincent from "@pages/RecycleVincent";

import Userprofile from "@pages/Userprofile";
import RecycleIphoneTreize from "@pages/RecycleIphoneTreize";

function App() {
  const [photo, setPhoto] = useState("");
  return (
    <div className="homepage">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vincentfile" element={<VincentFile />} />
        <Route path="/jonathanFile" element={<JonathanFile />} />
        <Route path="/jonathanData" element={<JonathanData />} />
        <Route path="/iphoneTreize" element={<IphoneTreize />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/marker" element={<Marqueur />} />
        <Route path="/photomode"element={<PhotoMode photo={photo} setPhoto={setPhoto}/>} />
        <Route path="/iphoneDouze" element={<IphoneDouze photo={photo}  />} />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/" element={<Home />} />
        <Route path="/photoMode" element={<PhotoMode />} />
        <Route path="/chargeur" element={<Chargeur />} />
        <Route path="/adaptateur" element={<Adaptateur />} />
        <Route path="/recycleVincent" element={<RecycleVincent />} />
        <Route path="/recycleIphoneTreize" element={<RecycleIphoneTreize/>}/>
      </Routes>
    </div>
  );
}
export default App;
