import VincentFile from "@pages/VincentFile";
import JonathanFile from "@pages/JonathanFile";
import JonathanData from "@pages/JonathanData";
import Iphone from "@pages/Iphone";
import Home from "@pages/Home";
import Marqueur from"@pages/Marqueur";
import Chargeur from "@pages/Chargeur";
import { Routes, Route } from "react-router-dom";
import "../index.css";
import Shoes from "@pages/Shoes";
import Adaptateur from "@pages/Adaptateur";
import RecycleVincent from "@pages/RecycleVincent";

function App() {
  
  return (
    <div className="App h-screen text-center bg-neutral-900 text-yellow-500">
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
       
        <Route
          path="/vincentFile"
          element={<VincentFile />}
        />
        <Route path="/jonathanFile" element ={<JonathanFile/>}/>
        <Route path="/jonathanData" element ={<JonathanData/>}/>
        <Route path="/iphone" element ={<Iphone/>}/>
        <Route path="/shoes" element={<Shoes/>}/>
        <Route path="/marker" element={<Marqueur/>}/>
        <Route path="/chargeur" element={<Chargeur/>}/>
        <Route path="/adaptateur" element={<Adaptateur/>}/>
        <Route
          path="/reclycleVincent"
          element={
            <RecycleVincent />
          }
        />
      
      
      </Routes>
    </div>
  );
  


}

export default App;
