
import React from "react";
import photo from "@assets/images/recycle.png"
import fiche from "@assets/images/fiche.png"
import { Link } from "react-router-dom";

function RecycleIphone() {

  
  
    return (
      <>
       <h3 className="mt-10">
  
                
   Ou recycler votre objet "Iphone 12" </h3>
        

        
          <div className="rounded-lg">
         
              
          <img className="decheterie"  src={photo} alt="photo" />
             
        
           
          
          <img className="decheterie"  src={fiche} alt="photo" />

          <Link to="/photomode3">
              <button
                className="bg-blue-500 hover:bg-700 text-white font-bold py-2 px-4 mb-2 rounded"
                
              >
                click here
              </button>
              </Link>
            
          
        </div>
      </>
    );
  }
  
  export default RecycleIphone;

