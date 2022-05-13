import VincentFile from "@pages/VincentFile";
import JonathanFile from "@pages/JonathanFile";
import JonathanData from "@pages/JonathanData";

import { Routes, Route } from "react-router-dom";

import PhotoMode from "@pages/PhotoMode";
import { useState } from "react";
import Home from "@pages/Home";

import "../index.css";

import Shoes from "@pages/Shoes";
import RecycleVincent from "@pages/RecycleVincent";
import PhotoMode2 from "@pages/PhotoMode2";
import PhotoMode3 from "@pages/PhotoMode3";
//import IphoneTreize from "@pages/IphoneTreize";
import IphoneDouze from "@pages/IphoneDouze";

import Userprofile from "@pages/Userprofile";
import RecycleShoes from "@pages/RecycleShoes";
import RecycleIphone from "@pages/recycleIphone";
import AddProduct from "@pages/AddProduct";

function App() {
  const [photo, setPhoto] = useState("");
  return (
    <div className="homepage">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vincent" element={<VincentFile/>} />
        <Route path="/jonathan1" element={<JonathanFile />} />
        <Route path="/jonathan2" element={<JonathanData />} />
        <Route path="/iphonedouze" element={<IphoneDouze />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route
          path="/photomode"
          element={<PhotoMode photo={photo} setPhoto={setPhoto} />}
        />
        <Route
          path="/photomode2"
          element={<PhotoMode2 photo={photo} setPhoto={setPhoto} />}
        />
        <Route
          path="/photomode3"
          element={<PhotoMode3 photo={photo} setPhoto={setPhoto} />}
        />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/" element={<Home />} />

        <Route path="/reclyclevincent" element={<RecycleVincent />} />
        <Route path="/recycleshoes" element={<RecycleShoes />} />
        <Route path="/recycleiphone" element={<RecycleIphone />} />

        <Route path="/addproduct" element={<AddProduct photo={photo} />} />
      </Routes>
    </div>
  );
}
export default App;
