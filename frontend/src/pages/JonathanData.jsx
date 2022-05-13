function JonathanData() {
  const jonathanData = {
    Name: "Human",
    name: "Jonathan Siaut ",
    img: "https://i.ibb.co/mvzFn8Q/PXL-20220512-100017977-PORTRAIT.jpg",
    basket: 70,
    bierre: 40,
    data: 100,
    infoUrl: "https://www.linkedin.com/in/jonathan-siaut/?locale=fr_FR",
    ecoImpact: 5,
    labels: [
      {
        Name: "Person",
        Confidence: 98.44818878173828,
        Instances: [
          {
            BoundingBox: {
              Width: 0.9905786514282227,
              Height: 0.9602513313293457,
              Left: 0.009090645238757133,
              Top: 0.010004467330873013,
            },
            Confidence: 98.44818878173828,
          },
        ],
        Parents: [],
      },
      {
        Name: "Human",
        Confidence: 98.44818878173828,
        Instances: [],
        Parents: [],
      },
      {
        Name: "Finger",
        Confidence: 97.58895874023438,
        Instances: [],
        Parents: [],
      },
      {
        Name: "Man",
        Confidence: 76.16449737548828,
        Instances: [],
        Parents: [
          {
            Name: "Person",
          },
        ],
      },
      {
        Name: "Thumbs Up",
        Confidence: 58.45242691040039,
        Instances: [],
        Parents: [
          {
            Name: "Person",
          },
          {
            Name: "Finger",
          },
        ],
      },
    ],
    LabelModelVersion: "2.0",
  };

  function onClick() {
    window.location.href =
      "https://www.linkedin.com/in/jonathan-siaut/?locale=fr_FR";
  }

  return (
    <div className="bg-cover bg-center h-full w-full absolute bg-pack-train p-10 text-black">
      <div className="rounded-lg">
        <div />
        <img
          className="w-[50%] shadow-md rounded-lg mx-auto"
          src={jonathanData.img}
          alt={jonathanData}
        />


<div className="text-3xl text-center ">{jonathanData.name}</div>
      <div className="text-3xl text-center mt-2">Composition</div>
      <div className="text-2xl text-center">Catogorie:{' '}  {jonathanData.Name}</div>
      <div className="text-xl text-center">Basket:{' '}  {jonathanData.basket}%</div>
      <div className="text-xl text-center">bierre:{' '}  {jonathanData.bierre}%</div>
      <div className="text-xl text-center">Data: {' '} {jonathanData.data}%</div>
      <div className="text-xl text-center">Eco impact: {' '} {jonathanData.ecoImpact}</div>
      <div className="mx-auto text-center">
     
      <button  type="button" onClick={onClick}>
        <svg
          className="w-6 h-6  mx-auto text-blue-500 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
        </svg>
      </button>
     
      </div>

      </div>
    </div>
  );
}

export default JonathanData;
