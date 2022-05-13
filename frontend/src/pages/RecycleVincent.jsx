import recycle1 from "@assets/images/nonrecyclable.gif";
function RecycleVincent({ photo }) {
  const vins = {
    name: "Vincent Vaur",
    img: "https://i.ibb.co/KzqQkpj/PXL-20220512-092514918-PORTRAIT.jpg",
  };

  return (
    <>
      <div className=" bg-center h-full w-full  p-10 text-black">
     

              
<h3> Ou recycler votre formateur? </h3>
        <div className="rounded-lg">   
          <img
            className="md:animate-spin rounded-lg transform"
            src={vins.img}
            alt={photo}
            width={250}
          />
          <img className="decheterie"  src={recycle1} alt="photo" width={250} />
        
          
          
         </div>
         </div>
 
    </>
  );
}

export default RecycleVincent;
