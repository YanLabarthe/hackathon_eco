 import { Routes, Route } from "react-router-dom";
 import Home from "@pages/Home";
 import Scan from "@pages/Scan";
import "../index.css";

function App() {
  
  return (
    <div className="homepage bg-green-200  "  >
      <Routes>
        <Route
          path="/"
          element={<Home/>} />
      <Route
          path="/scan"
          element={<Scan />}
        />
     
        
      </Routes>
    </div>
  );
  

 
}

export default App;
