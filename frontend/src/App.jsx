import VincentFile from "@pages/VincentFile";
import JonathanFile from "@pages/JonathanFile";
import JonathanData from "@pages/JonathanData";

import { Routes, Route } from "react-router-dom";

import PhotoMode from "@pages/PhotoMode";
import { useState } from "react";
<<<<<<< HEAD
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
=======
import Iphone from "@pages/Iphone";
import Home from "@pages/Home";

import "../index.css";

import Shoes from "@pages/Shoes";
import RecycleVincent from "@pages/RecycleVincent";
import PhotoMode2 from "@pages/PhotoMode2";
import PhotoMode3 from "@pages/PhotoMode2";



import Userprofile from "@pages/Userprofile";
import RecycleShoes from "@pages/RecycleShoes";
import RecycleIphone from "@pages/recycleIphone";

import AddProduct from "@pages/AddProduct";

>>>>>>> 392aef672df045460e9c2096ca44e589f316aade

function App() {
  const [photo, setPhoto] = useState("");
  return (
    <div className="homepage">
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/vincentfile" element={<VincentFile />} />
        <Route path="/jonathanFile" element={<JonathanFile />} />
        <Route path="/jonathanData" element={<JonathanData />} />
        <Route path="/iphoneTreize" element={<IphoneTreize />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/marker" element={<Marqueur />} />
        <Route path="/photomode"element={<PhotoMode photo={photo} setPhoto={setPhoto}/>} />
        <Route path="/iphoneDouze" element={<IphoneDouze photo={photo}  />} />
=======
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
>>>>>>> 392aef672df045460e9c2096ca44e589f316aade
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/" element={<Home />} />

        <Route path="/photoMode" element={<PhotoMode />} />
        <Route path="/chargeur" element={<Chargeur />} />
        <Route path="/adaptateur" element={<Adaptateur />} />
<<<<<<< HEAD
        <Route path="/recycleVincent" element={<RecycleVincent />} />
        <Route path="/recycleIphoneTreize" element={<RecycleIphoneTreize/>}/>
=======
        <Route path="/reclyclevincent" element={<RecycleVincent />} />
        <Route path="/recycleshoes" element={<RecycleShoes/>}     />
        <Route path="/recycleiphone"  element={<RecycleIphone/>}/>

      
        <Route path="/addproduct" element={<AddProduct photo={photo} />} />

>>>>>>> 392aef672df045460e9c2096ca44e589f316aade
      </Routes>
    </div>
  );
}
export default App;
