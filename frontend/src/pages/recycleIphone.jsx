import React from "react";
import photo from "@assets/images/recycle.png"
import fiche from "@assets/images/fiche.png"

function RecycleIphone() {

  
  
    return (
      <>
       <h3 className="mt-10">
  
                
   Ou recycler votre objet "Iphone 12" </h3>
        

        
          <div className="rounded-lg">
         
              
          <img className="decheterie"  src={photo} alt="photo" />
             
        
           
          
          <img className="decheterie"  src={fiche} alt="photo" />
            
          
        </div>
      </>
    );
  }
  
  export default RecycleIphone;