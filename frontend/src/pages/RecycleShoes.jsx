import React from "react";
import photod from "@assets/images/captureshooes.png"
import textile from "@assets/images/fichetextile.png"

function RecycleShoes( ) {

  
    return (
      <>
      <div className="rounded-lg"></div>
          <h3 className="mt-10"> Ou recycler votre objet "Chaussures" </h3>
            
          <img className="decheterie"  src={photod} alt="photo" />
          <img className="decheterie"  src={textile} alt="photo" />
        
      </>
    );
  }
  
  export default RecycleShoes;