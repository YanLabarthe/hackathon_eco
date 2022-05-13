function Adaptateur({ photo }) {
  const adaptateur = {
    name: "Adaptateur secteur MagSafe de 60 watts",
    img: "https://ibb.co/YL6qB7R",
    poids: "30g",

    plastic: 30,
    lithium: 30,
    cobalt: 17,
    graphite: 13,
    aluminium: 8,
    cuivre: 2,

    recCat: { battery: "batterie", computer: "ordinateur" },
    ecoImpact: 10,
    infoUrl:
      "https://www.apple.com/fr/shop/product/MC461Z/A/adaptateur-secteur-magsafe-60w-apple-pour-macbook-et-macbook-pro-13-pouces",
    labels: [
      {
        Name: "Adapter",
        Confidence: 99.47618865966797,
        Instances: [],
        Parents: [],
      },
      {
        Name: "Plug",
        Confidence: 93.5892333984375,
        Instances: [],
        Parents: [
          {
            Name: "Adapter",
          },
        ],
      },
      {
        Name: "Mouse",
        Confidence: 71.37274932861328,
        Instances: [
          {
            BoundingBox: {
              Width: 0.5677611231803894,
              Height: 0.30426937341690063,
              Left: 0.2503468692302704,
              Top: 0.3605409264564514,
            },
            Confidence: 71.37274932861328,
          },
        ],
        Parents: [
          {
            Name: "Hardware",
          },
          {
            Name: "Computer",
          },
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Electronics",
        Confidence: 71.37274932861328,
        Instances: [],
        Parents: [],
      },
      {
        Name: "Computer",
        Confidence: 71.37274932861328,
        Instances: [],
        Parents: [
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Hardware",
        Confidence: 71.37274932861328,
        Instances: [],
        Parents: [
          {
            Name: "Electronics",
          },
        ],
      },
    ],
    LabelModelVersion: "2.0",
  };

  function onClick() {
    window.location.href =
      "https://www.apple.com/fr/shop/product/MC461Z/A/adaptateur-secteur-magsafe-60w-apple-pour-macbook-et-macbook-pro-13-pouces";
  }
  return (
    <div className=" bg-cover bg-center h-full w-full bg-green-200 p-10 text-black ">
      <img
        className="mx-auto rounded-lg h-30 w-[50%]"
        src={photo}
        alt={photo}
      />
      <div className="rounded-lg  m-0 shadow-lg flex bg-green-100">
        <div className="" />
        <div className="flex-1 card-block relative">
          <div className="p-6">
            <h2 className="font medium text-3xl text-green-500 mb-3">
              {adaptateur.name}
            </h2>
            <p className="text-2xl mt-2">Composition</p>

            <div className="text-xl">poids: {adaptateur.poids}</div>
            <div className="text-xl">plastic: {adaptateur.plastic}%</div>
            <div className="text-xl">lithium: {adaptateur.lithium}%</div>
            <div className="text-xl">cobalt: {adaptateur.cobalt}</div>
            <div className="text-xl">granite: {adaptateur.granite}%</div>
            <div className="text-xl">aluminium: {adaptateur.aluminium}%</div>
            <div className="text-xl">cuivre: {adaptateur.cuivre}%</div>
            <div className="text-xl">ecoImpact: {adaptateur.ecoImpact}%</div>
            <h2 className="font medium text-2xl mb-3">Information</h2>
            <button
              className="bg-blue-500 hover:bg-700 text-white font-bold py-2 px-4 mb-2 rounded"
              onClick={onClick}
            >
              click here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adaptateur;
