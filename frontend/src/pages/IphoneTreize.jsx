import { Wrapper, Status } from "@googlemaps/react-wrapper";
function IphoneTreize(){
  const iphone = {
    Name: "Iphone 13",
    name: "iPhone 13",
    img: "https://www.backmarket.fr/cdn-cgi/image/format=auto,quality=75,width=828/https://d1eh9yux7w8iql.cloudfront.net/product_images/512310_8dff631d-c28c-4e85-af59-7cb9c3439ffa.jpg",
    poids: "31g",

    aluminium: 20,
    carbon: 10,
    oxygen: 10,
    iron: 18,
    silicon: 17,
    cuivre: 13,
    cobalt: 4,
    hydrogen: 4,
    chrom: 4,

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
  };

  function onClick() {
    window.location.href = "https://www.apple.com/fr/iphone-12/key-features/";
  }

  return (
    <>
      <div className=" bg-center h-full w-full absolute  p-10 text-black">
        <div className="rounded-lg">
          <div>
            <img className="rounded-lg" src={iphone.img} alt={iphone.img} />

            <div className="relative px-2 -mt-5 text-center">
              <div className="bg-green-100 rounded-lg shadow-md">
                <div className="text-3xl  text-green-500 mb-2">Caractéristiques</div>
                <div className="text-xl ">{"  "}{iphone.Name}</div>
                <div className="text-xl">poids: {iphone.poids}</div>
                <div className="text-xl">aluminium: {iphone.aluminium}%</div>
                <div className="text-xl">carbon: {iphone.carbon}%</div>
                <div className="text-xl">oxygen: {iphone.oxygen}%</div>
                <div className="text-xl">iron: {iphone.iron}%</div>
                <div className="text-xl">silicon: {iphone.silicon}%</div>
                <div className="text-xl">cuivre: {iphone.cuivre}%</div>
                <div className="text-xl">cobalt: {iphone.cobalt}%</div>
                <div className="text-xl">hydrogen: {iphone.hydrogen}%</div>
                <div className="text-xl">chrom: {iphone.chrom}%</div>
                <div className="text-xl">ecoImpact: {iphone.ecoImpact}%</div>
                <div className="font medium  text-green-500 text-3xl mb-3 text-center">Information</div>
                <button className="bg-blue-500 hover:bg-700 text-white font-bold py-2 px-4 mb-2 rounded"onClick={onClick}>click here</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IphoneTreize;