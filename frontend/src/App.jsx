import ObjectFile from "@pages/ObjectFile";
import Home from "@pages/Home";
import Reparation from "@pages/Reparation";
import { Routes, Route } from "react-router-dom";
import "../index.css";

function App() {
  
  return (
    <div className="App h-screen text-center bg-neutral-900 text-yellow-500">
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
       
        <Route
          path="/objectFile"
          element={<ObjectFile />}
        />
        <Route
          path="/reparation"
          element={
            <Reparation />
          }
        />
      
      
      </Routes>
    </div>
  );
  


}

export default App;
