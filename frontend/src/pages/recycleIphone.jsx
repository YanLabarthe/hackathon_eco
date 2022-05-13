<<<<<<< HEAD
function RecycleIphone() {
    
    return (
      <>
        <div className="bg-center h-full w-full  p-10 text-black">
          <div className="rounded-lg">
            <img
              className="md:animate-spin rounded-lg transform"
              src=""
              alt=""
            />
        
            <h3 className="mt-10">
=======

import React from "react";
import photo from "@assets/images/recycle.png"
import fiche from "@assets/images/fiche.png"

function RecycleIphone() {

  
  
    return (
      <>
       <h3 className="mt-10">
>>>>>>> 392aef672df045460e9c2096ca44e589f316aade
  
                
   Ou recycler votre objet "Iphone 12" </h3>
        

        
          <div className="rounded-lg">
         
              
          <img className="decheterie"  src={photo} alt="photo" />
             
        
           
          
          <img className="decheterie"  src={fiche} alt="photo" />
            
          
        </div>
      </>
    );
  }
  
  export default RecycleIphone;

