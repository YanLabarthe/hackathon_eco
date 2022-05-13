import { Routes, Route } from "react-router-dom";
import PhotoMode from "@pages/PhotoMode";
import { useState } from "react";
import Iphone from "@pages/Iphone";
import "../index.css";

function App() {
  const [photo, setPhoto] = useState("");
  return (
    <Routes>
      <Route
        path="/"
        element={<PhotoMode photo={photo} setPhoto={setPhoto} />}
      />
      <Route path="/iphone" element={<Iphone photo={photo} />} />
    </Routes>
  );
}

export default App;
