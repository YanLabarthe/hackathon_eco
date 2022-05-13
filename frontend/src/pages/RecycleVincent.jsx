import recycle from "@assets/img/recycl.png";
function RecycleVincent({ photo }) {
  const vins = {
    name: "Vincent Vaur",
    img: "https://i.ibb.co/KzqQkpj/PXL-20220512-092514918-PORTRAIT.jpg",
  };

  return (
    <>
      <div className="bg-green-200 bg-center h-full w-full  p-10 text-black">
        <div className="rounded-lg">
          <img
            className="md:animate-spin rounded-lg transform"
            src={vins.img}
            alt={photo}
          />
         
        
          <h3 className="mt-10">

              
              Recycler</h3>
          
          <li>hola</li>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </div>
      </div>
    </>
  );
}

export default RecycleVincent;
