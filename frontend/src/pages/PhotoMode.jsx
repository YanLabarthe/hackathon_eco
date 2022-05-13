import React, { useRef } from "react";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function PhotoMode({ photo, setPhoto }) {
  const inputFile = useRef();

  const handlePhotoChange = (event) => {
    if (event.target.files.length > 0) {
      const src = URL.createObjectURL(event.target.files[0]);
      setPhoto(src);
    }
  };

  return (
    <div className="text-mada flex flex-col bg-neutral-900 h-screen w-auto mx-auto justify-center items-center">
      <Webcam className="h-full w-auto mx-auto" />
      {photo && (
        <>
          <div className="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none ">
            <div className="flex flex-col relative mx-auto inset-x-0 text-center bottom-20 bg-gray-100 border-2 border-black rounded-lg">
              <div className="flex items-center justify-between pr-2">
                <div className="flex items-center">
                  <img
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552346295"
                    alt="iphone 13"
                    className="w-auto h-20 pb-2"
                  />
                  <div className="flex flex-col ml-3">
                    <div className="font-medium text-black leading-none ">
                      Iphone 12 pro
                    </div>
                    <div className="text-sm text-black leading-none mt-1">
                      Produit électronique - téléphone portable
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="flex-no-shrink bg-green-400 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-800 text-black rounded-full"
                >
                  Recycle
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-[100px] justify-center items-center inset-0 z-50 outline-none focus:outline-none ">
              <div className="flex flex-col relative mx-auto inset-x-0 text-center bottom-20 bg-gray-100 border-2 border-black rounded-lg">
                <Link to="/iphone">
                  <div className="flex items-center justify-between p-3">
                    Produit photographié - Iphone 12
                  </div>
                  
                </Link>
              </div>
              <div className="flex flex-col relative mx-auto inset-x-0 text-center bottom-20 bg-gray-100 border-2 border-black rounded-lg">
                <Link to="/addproduct">
                  <div className="flex items-center justify-between p-3">
                    L'objet n'est pas listé
                  </div>
                </Link>
              </div>
            </div>
          </div>
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
        className="hidden"
      />
    </div>
  );
}

export default PhotoMode;
