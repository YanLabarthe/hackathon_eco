function Shoes({ photo }) {
  const shoe = {
    name: "shoe",
    img: "https://i.ibb.co/kMkjgsh/PXL-20220512-085612072-MP-min.jpg",
    poids: "30g",
    message: "estimations based on picture",
    cloth: 70,
    leather: 20,
    plastic: 10,
    LabelModelVersion: "2.0",
    recCat: { cloth: "vêtement", shoes: "chaussure" },
    ecoImpact: 3,
    infoUrl: "",
    labels: [
      {
        Name: "Clothing",
        Confidence: 99.94496154785156,
        Instances: [],
        Parents: [],
      },
      {
        Name: "Apparel",
        Confidence: 99.94496154785156,
        Instances: [],
        Parents: [],
      },
      {
        Name: "Shoe",
        Confidence: 99.9255142211914,
        Instances: [
          {
            BoundingBox: {
              Width: 0.9371299147605896,
              Height: 0.569766104221344,
              Left: 0.034190889447927475,
              Top: 0.17283199727535248,
            },
            Confidence: 99.9255142211914,
          },
        ],
        Parents: [
          {
            Name: "Footwear",
          },
          {
            Name: "Clothing",
          },
        ],
      },
      {
        Name: "Footwear",
        Confidence: 99.9255142211914,
        Instances: [],
        Parents: [
          {
            Name: "Clothing",
          },
        ],
      },
      {
        Name: "Sneaker",
        Confidence: 85.81442260742188,
        Instances: [],
        Parents: [
          {
            Name: "Shoe",
          },
          {
            Name: "Footwear",
          },
          {
            Name: "Clothing",
          },
        ],
      },
      {
        Name: "Running Shoe",
        Confidence: 81.50861358642578,
        Instances: [],
        Parents: [
          {
            Name: "Shoe",
          },
          {
            Name: "Footwear",
          },
          {
            Name: "Clothing",
          },
        ],
      },
      {
        Name: "Canvas",
        Confidence: 58.37407684326172,
        Instances: [],
        Parents: [],
      },
      {
        Name: "Suede",
        Confidence: 56.06569290161133,
        Instances: [],
        Parents: [],
      },
    ],
    LabelModelVersion: "2.0",
  };
  return (
    <>
      <div className="bg-green-200 h-full max-w-[80%] mx-auto text-black">
        <div className="rounded-lg">
          <div>
            <img
              className="w-[40%] shadow-md rounded-lg mx-auto "
              src={shoe.img}
            />
            <div className="relative px-2 -mt-10">
              <div className="bg-green-100 rounded-lg shadow-md">
                <div className="text-2xl mt-5 items-center">
                  Caractéristiques
                </div>
                <div className="text-xl">name:{shoe.name}</div>
                <div className="text-xl">poids:{shoe.poids}</div>
                <div className="text-xl">cloth:{shoe.cloth}%</div>
                <div className="text-xl ">leather:{shoe.leather}%</div>
                <div className="text-xl">plastic:{shoe.plastic}%</div>
                <div className="text-xl">ecoImpact:{shoe.ecoImpact}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Shoes;
