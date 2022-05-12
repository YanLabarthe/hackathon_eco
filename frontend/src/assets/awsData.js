const awsData = [
  {
    name: "vincent",
    img: "https://ibb.co/fGpK5zY",
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
    name: "cable",
    img: "https://ibb.co/j5jSjs9",
    labels: [
      {
        Name: "Adapter",
        Confidence: 98.35540008544922,
        Instances: [],
        Parents: [],
      },
      {
        Name: "Plug",
        Confidence: 80.85070037841797,
        Instances: [],
        Parents: [
          {
            Name: "Adapter",
          },
        ],
      },
      {
        Name: "Headphones",
        Confidence: 79.10244750976562,
        Instances: [
          {
            BoundingBox: {
              Width: 0.7112284898757935,
              Height: 0.5872418284416199,
              Left: 0.1286201775074005,
              Top: 0.17362086474895477,
            },
            Confidence: 79.10244750976562,
          },
        ],
        Parents: [
          {
            Name: "Electronics",
          },
        ],
      },
      {
        Name: "Electronics",
        Confidence: 79.10244750976562,
        Instances: [],
        Parents: [],
      },
      {
        Name: "Headset",
        Confidence: 79.10244750976562,
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
    name: "screen",
    img: "https://ibb.co/wg7hTdM",
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
    name: "phone",
    img: "https://ibb.co/85gKS0b",
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
  {
    name: "chargeur",
    img: "https://ibb.co/YL6qB7R",
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
    name: "shoe",
    img: "https://ibb.co/6NVzR74",
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
