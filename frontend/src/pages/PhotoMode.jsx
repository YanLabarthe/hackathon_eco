import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";

function PhotoMode() {
  const inputFile = useRef();
  const [imagePreview, setImagePreview] = useState("");

  const handlePhotoChange = (event) => {
    if (event.target.files.length > 0) {
      const src = URL.createObjectURL(event.target.files[0]);
      setImagePreview(src);
    }
  };

  return (
    <div className="flex flex-col bg-neutral-900 h-screen w-auto mx-auto justify-center items-center">
      {/* <Webcam className="h-full w-auto mx-auto" /> */}

      {imagePreview && (
        <>
          <h1>PREVIEW</h1>
          <img src={imagePreview} width="200" />
        </>
      )}

      <button
        onClick={() => {
          inputFile.current.click();
        }}
        type="button"
        className="relative mx-auto inset-x-0 text-center bottom-20"
      >
        <div className="relative flex flex-col overflow-hidden items-center justify-center rounded-full w-[100px] h-[100px] bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col items-center justify-between w-[40px] h-[35px] origin-center overflow-hidden ">
            <img
              src="https://www.pngkey.com/png/full/10-104955_camera-icon-white-small-camera-icon-white-png.png"
              alt="camera"
            />
          </div>
        </div>
      </button>

      <input
        onChange={handlePhotoChange}
        ref={inputFile}
        name="photo"
        type="file"
      />
    </div>
  );
}

export default PhotoMode;
