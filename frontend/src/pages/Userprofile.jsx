import React from "react";
import { Link } from "react-router-dom";

function Userprofile() {
  return (
    
    

    <div className="userprofile" bg-green-200>

<Link to="/Userprofile">
            <div className="header"> Virginie</div>
          </Link>

      <div> <h1> Userprofile</h1></div>

      <div> <h3> Nombre d'items recyclés </h3> </div> 
      <div> <h3>Type de mateiraux </h3> </div> 
      
      <div> <h3>Metaux standards </h3> </div> 
         <p>
         <div> <h3>Cuivre</h3></div> 
         <div> <h3>Aluminium</h3></div> 
         <div> <h3> Fer</h3></div> 
       
        <div> <h3> Metaux rares </h3></div>
        </p>
       
      <div> 
      <div> <h3>Or</h3></div> 
      <div> <h3> Platine</h3></div> 
      <div> <h3>Cobalt</h3></div> 
      <div> <h3>Lithium</h3></div> 

        <p> 
          
          
        <div> <h3>Plastique</h3></div> 
 


         </p>
         </div>
     
    </div>
  );
}

export default Userprofile;
