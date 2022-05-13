import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Scan from "@pages/Scan";
import PhotoMode from "@pages/PhotoMode";
import Iphone from "@pages/Iphone";
import "../index.css";
import Userprofile from "@pages/Userprofile";

function App() {
  return (
    <div className="homepage">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/" element={<PhotoMode />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/userprofile" element={<Userprofile />} />
      </Routes>
    </div>
  );
}

export default App;
