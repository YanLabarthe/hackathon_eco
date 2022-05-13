function Chargeur() {
  const chargeur = {
    name: "Adaptateur secteur USB-C 30 W",
    img: "https://ibb.co/YL6qB7R",
    poids: "22g",
    comp: {
      plastic: 40,
      lithium: 20,
      cobalt: 15,
      graphite: 10,
      aluminium: 10,
      cuivre: 5,
    },
    recCat: { battery: "batterie", computer: "ordinateur" },
    ecoImpact: 10,
    infoUrl:
      "https://www.apple.com/fr/shop/product/MY1W2ZM/A/adaptateur-secteur-usb-c-30-w",
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

  return <></>;
}

export default Chargeur;
