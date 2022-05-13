function RecycleIphoneTreize() {
    const iphone = {
        Name: "Mobile Phone",
        name: "iPhone 13",
        img: "https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2022/03/dsc00567-2048x1152.jpg?resize=1024,576"
        ,
        poids: "31g",
    
    }
    return (
      <>
        <div className=" bg-center h-full w-full  p-10 text-black">
          <div className="rounded-lg">
            <img
              className="md:animate-spin rounded-lg transform"
              src={iphone.img}
              alt=""
            />
           
          
            <h3 className="mt-10 text-center">
  
                
                Quelques adresses pour recycler votre appareil</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d90536.39763299967!2d-0.6499697133330126!3d44.83658877841521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srecycler%20iphone%2013%20borrdeaux!5e0!3m2!1sfr!2sfr!4v1652439401105!5m2!1sfr!2sfr" className="w-600 h-450 allowfullscreen="></iframe>
          </div>
        </div>
      </>
    );
  }
  
  export default RecycleIphoneTreize;