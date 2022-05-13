import VincentFile from "@pages/VincentFile";
import JonathanFile from "@pages/JonathanFile";
import JonathanData from "@pages/JonathanData";
import PhotoMode from "@pages/PhotoMode";
import { useState } from "react";
import Iphone from "@pages/Iphone";
import Home from "@pages/Home";
import { Routes, Route } from "react-router-dom";
import "../index.css";
import Shoes from "@pages/Shoes";
import RecycleVincent from "@pages/RecycleVincent";
import PhotoMode2 from "@pages/PhotoMode2";
import PhotoMode3 from "@pages/PhotoMode2";

import Userprofile from "@pages/Userprofile";
import AddProduct from "@pages/AddProduct";

function App() {
  const [photo, setPhoto] = useState("");
  return (
    <div className="homepage">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vicent" element={<VincentFile />} />
        <Route path="/jonathan1" element={<JonathanFile />} />
        <Route path="/jonathan2" element={<JonathanData />} />
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
        <Route path="/iphone" element={<Iphone photo={photo} />} />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/" element={<Home />} />
        <Route path="/reclycleVincent" element={<RecycleVincent />} />
        <Route path="/addproduct" element={<AddProduct photo={photo} />} />
      </Routes>
    </div>
  );
}
export default App;
