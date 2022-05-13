const awsData = [
  {
    name: "Vincent Vaur",
    img: "https://ibb.co/fGpK5zY",
    comp: {
      bierre: 70,
      punk: 50,
      clope: 20,
      javascript: 100,
    },
    recCat: { human: "humain" },
    infoUrl: "https://www.linkedin.com/in/vincent-vaur/?originalSubdomain=fr",
    ecoImpact: 3,
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
  },
  {
    name: "Jonathan Plantey ",
    img: "https://i.ibb.co/25zPvzv/PXL-20220512-100022411-PORTRAIT.jpg",
    comp: {
      flan: 50,
      bierre: 30,
      bonnet: 40,
      php: 100,
    },
    recCat: { human: "humain" },
    infoUrl: "http://www.jonathan-plantey.fr/",
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
  },
  {
    name: "Jonathan Siaut ",
    img: "https://ibb.co/GsP3ZTg",
    comp: {
      basket: 70,
      bierre: 40,
      data: 100,
    },
    recCat: { human: "humain" },
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
  },

  // ------------------------------------------------phone-------------------------------------------------------------
  {
    name: "iPhone 12",
    img: "https://ibb.co/j5jSjs9",
    poids: "31g",
    comp: {
      aluminium: 20,
      carbon: 10,
      oxygen: 10,
      iron: 18,
      silicon: 17,
      cuivre: 13,
      cobalt: 4,
      hydrogen: 4,
      chrom: 4,
    },
    recCat: { electronic: "electronique", phone: "téléphone" },
    infoUrl: "https://www.apple.com/fr/iphone-12/key-features/",
    ecoImpact: 9,
    labels: [
      {
        Name: "Mobile Phone",
        Confidence: 99.72603607177734,
        Instances: [
          {
            BoundingBox: {
              Width: 0.6989620327949524,
              Height: 0.36926978826522827,
              Left: 0.18379032611846924,
              Top: 0.2954246699810028,
            },
            Confidence: 91.35437774658203,
          },
        ],
        Parents: [
          {
            Name: "Phone",
          },
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Cell Phone",
        Confidence: 99.72603607177734,
        Instances: [],
        Parents: [
          {
            Name: "Phone",
          },
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Phone",
        Confidence: 99.72603607177734,
        Instances: [],
        Parents: [
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Electronics",
        Confidence: 99.72603607177734,
        Instances: [],
        Parents: [],
      },
      {
        Name: "Iphone",
        Confidence: 97.43731689453125,
        Instances: [],
        Parents: [
          {
            Name: "Mobile Phone",
          },
          {
            Name: "Phone",
          },
          {
            Name: "Electronics",
          },
        ],
      },
    ],
    LabelModelVersion: "2.0",
  },
  {
    name: "iPhone 13 pro",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-gold-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552345862",
    poids: "40g",
    comp: {
      aluminium: 20,
      carbon: 10,
      oxygen: 10,
      iron: 18,
      silicon: 17,
      cuivre: 13,
      cobalt: 4,
      hydrogen: 4,
      chrom: 4,
    },
    recCat: { electronic: "electronique", phone: "téléphone" },
    infoUrl:
      "https://www.apple.com/fr/iphone-13-pro/?afid=p238%7Cs-dc_mtid_20925fhs39939_pcrid_587761144444_pgrid_133548844746_&cid=wwa-fr-kwgo-iphone--slid---productid--Brand-iphone13pro--",
    ecoImpact: 9,
    labels: [
      {
        Name: "Mobile Phone",
        Confidence: 99.72603607177734,
        Instances: [
          {
            BoundingBox: {
              Width: 0.6989620327949524,
              Height: 0.36926978826522827,
              Left: 0.18379032611846924,
              Top: 0.2954246699810028,
            },
            Confidence: 91.35437774658203,
          },
        ],
        Parents: [
          {
            Name: "Phone",
          },
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Cell Phone",
        Confidence: 99.72603607177734,
        Instances: [],
        Parents: [
          {
            Name: "Phone",
          },
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Phone",
        Confidence: 99.72603607177734,
        Instances: [],
        Parents: [
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Electronics",
        Confidence: 99.72603607177734,
        Instances: [],
        Parents: [],
      },
      {
        Name: "Iphone",
        Confidence: 97.43731689453125,
        Instances: [],
        Parents: [
          {
            Name: "Mobile Phone",
          },
          {
            Name: "Phone",
          },
          {
            Name: "Electronics",
          },
        ],
      },
    ],
    LabelModelVersion: "2.0",
  },
  // ------------------------------------------------ecrans-------------------------------------------------------------
  {
    name: "Terra screen 27 pouces",
    img: "https://ibb.co/wg7hTdM",
    poids: "40g",
    comp: {
      plastic: 40,
      silicon: 20,
      cuivre: 20,
      iron: 12,
      gold: 5,
      platinium: 3,
    },
    recCat: { electronic: "electronique", screen: "écran d'ordinateur" },
    infoUrl:
      "https://www.amazon.fr/Wortmann-AG-Terra-2747W-%C3%A9cran/dp/B07DWDJXDD",
    ecoImpact: 9,
    labels: [
      {
        Name: "Screen",
        Confidence: 99.01097106933594,
        Instances: [],
        Parents: [
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Electronics",
        Confidence: 99.01097106933594,
        Instances: [],
        Parents: [],
      },
      {
        Name: "LCD Screen",
        Confidence: 98.82583618164062,
        Instances: [],
        Parents: [
          {
            Name: "Monitor",
          },
          {
            Name: "Screen",
          },
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Monitor",
        Confidence: 98.82583618164062,
        Instances: [
          {
            BoundingBox: {
              Width: 0.8772497177124023,
              Height: 0.758476734161377,
              Left: 0.037996403872966766,
              Top: 0.14611698687076569,
            },
            Confidence: 97.20672607421875,
          },
        ],
        Parents: [
          {
            Name: "Screen",
          },
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Display",
        Confidence: 98.82583618164062,
        Instances: [],
        Parents: [
          {
            Name: "Screen",
          },
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Furniture",
        Confidence: 81.55342102050781,
        Instances: [],
        Parents: [],
      },
      {
        Name: "Wood",
        Confidence: 73.08085632324219,
        Instances: [],
        Parents: [],
      },
      {
        Name: "Table",
        Confidence: 68.2524185180664,
        Instances: [],
        Parents: [
          {
            Name: "Furniture",
          },
        ],
      },
      {
        Name: "TV",
        Confidence: 67.25493621826172,
        Instances: [],
        Parents: [
          {
            Name: "Monitor",
          },
          {
            Name: "Screen",
          },
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Television",
        Confidence: 67.25493621826172,
        Instances: [],
        Parents: [
          {
            Name: "Monitor",
          },
          {
            Name: "Screen",
          },
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Plywood",
        Confidence: 66.91878509521484,
        Instances: [],
        Parents: [
          {
            Name: "Wood",
          },
        ],
      },
      {
        Name: "Computer",
        Confidence: 62.56942367553711,
        Instances: [],
        Parents: [
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Desk",
        Confidence: 56.91919708251953,
        Instances: [],
        Parents: [
          {
            Name: "Table",
          },
          {
            Name: "Furniture",
          },
        ],
      },
    ],
    LabelModelVersion: "2.0",
  },
  {
    name: "Terra screen 23 pouces",
    img: "https://www.quickinfosystem.com/wp-content/uploads/2016/06/Ecran-TERRA-LED-21-5-2.jpg",
    poids: "150g",
    comp: {
      plastic: 40,
      silicon: 20,
      cuivre: 20,
      iron: 12,
      gold: 5,
      platinium: 3,
    },
    recCat: { electronic: "electronique", screen: "écran d'ordinateur" },
    infoUrl:
      "https://www.quickinfosystem.com/boutique/particuliers/ecrans-particuliers/ecran-terra-led-21-5-pouces-greenline-plus/",
    ecoImpact: 9,
    labels: [
      {
        Name: "Screen",
        Confidence: 99.01097106933594,
        Instances: [],
        Parents: [
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Electronics",
        Confidence: 99.01097106933594,
        Instances: [],
        Parents: [],
      },
      {
        Name: "LCD Screen",
        Confidence: 98.82583618164062,
        Instances: [],
        Parents: [
          {
            Name: "Monitor",
          },
          {
            Name: "Screen",
          },
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Monitor",
        Confidence: 98.82583618164062,
        Instances: [
          {
            BoundingBox: {
              Width: 0.8772497177124023,
              Height: 0.758476734161377,
              Left: 0.037996403872966766,
              Top: 0.14611698687076569,
            },
            Confidence: 97.20672607421875,
          },
        ],
        Parents: [
          {
            Name: "Screen",
          },
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Display",
        Confidence: 98.82583618164062,
        Instances: [],
        Parents: [
          {
            Name: "Screen",
          },
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Furniture",
        Confidence: 81.55342102050781,
        Instances: [],
        Parents: [],
      },
      {
        Name: "Wood",
        Confidence: 73.08085632324219,
        Instances: [],
        Parents: [],
      },
      {
        Name: "Table",
        Confidence: 68.2524185180664,
        Instances: [],
        Parents: [
          {
            Name: "Furniture",
          },
        ],
      },
      {
        Name: "TV",
        Confidence: 67.25493621826172,
        Instances: [],
        Parents: [
          {
            Name: "Monitor",
          },
          {
            Name: "Screen",
          },
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Television",
        Confidence: 67.25493621826172,
        Instances: [],
        Parents: [
          {
            Name: "Monitor",
          },
          {
            Name: "Screen",
          },
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Plywood",
        Confidence: 66.91878509521484,
        Instances: [],
        Parents: [
          {
            Name: "Wood",
          },
        ],
      },
      {
        Name: "Computer",
        Confidence: 62.56942367553711,
        Instances: [],
        Parents: [
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Desk",
        Confidence: 56.91919708251953,
        Instances: [],
        Parents: [
          {
            Name: "Table",
          },
          {
            Name: "Furniture",
          },
        ],
      },
    ],
    LabelModelVersion: "2.0",
  },
  // ------------------------------------------------marqueur-------------------------------------------------------------
  {
    name: "marqueur",
    img: "https://ibb.co/GWGNyyF",
    comp: {
      plastic: 60,
      toluene: 20,
      xylene: 20,
    },
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
  },
  // ------------------------------------------------chargeur-------------------------------------------------------------
  {
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
  },
  {
    name: "Adaptateur secteur MagSafe de 60 watts",
    img: "https://ibb.co/YL6qB7R",
    poids: "30g",
    comp: {
      plastic: 30,
      lithium: 30,
      cobalt: 17,
      graphite: 13,
      aluminium: 8,
      cuivre: 2,
    },
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
  },

  //-----------------------------------------------chaussure-------------------------------------------------------
  {
    name: "shoe",
    img: "https://ibb.co/6NVzR74",
    poids: "30g",
    comp: {
      message: "estimations based on picture",
      cloth: 70,
      leather: 20,
      plastic: 10,
    },
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
  },
];
