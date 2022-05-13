function Markeur({ photo }) {
  const marqueur = {
    name: "marker",
    img: "https://ibb.co/GWGNyyF",
    Confidence: 98.91521453857422,
    pen: "feutre tableau",

    plastic: 60,
    toluene: 20,
    xylene: 20,

    recCat: { commonItem: "object courant", pen: "feutre tableau" },
    ecoImpact: 7,
    infoUrl: "",
    labels: [
      {
        name: "marqueur",
        img: "https://ibb.co/GWGNyyF",
        labels: [
          {
            Name: "Marker",
            Confidence: 98.91521453857422,
            Instances: [],
            Parents: [],
          },
        ],
        LabelModelVersion: "2.0",
      },
    ],
  };
  return (
    <>
      <div className="bg-cover bg-center h-full w-full absolute bg-pack-train p-10 text-black">
        <div className="rounded-lg">
          <div>
            <img src={photo} alt={photo} />

            <div className="relative px-2 -mt-5">
              <div className="bg-green-200 rounded-lg shadow-md">
                <div className="text-2xl">Caractéristiques</div>
                <div className="text-xl">
                  Name:{"  "}
                  {marqueur.name}
                </div>
                <div className="text-xl">pen: {marqueur.pen}</div>
                <div className="text-xl">plastic: {marqueur.plastic}%</div>
                <div className="text-xl">toluene: {marqueur.toluene}%</div>
                <div className="text-xl">xylene: {marqueur.xylene}%</div>
                <div className="text-xl">confidence: {marqueur.Confidence}</div>
                <div className="text-xl">ecoImpact: {marqueur.ecoImpact}%</div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Markeur;