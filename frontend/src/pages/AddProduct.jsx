function AddProduct({ photo }) {
  return (
    <div className="bg-cover bg-center h-full w-full absolute bg-pack-train p-2 text-black">
      <div className="rounded-lg h-full w-full">
        <div className=" h-full w-full">
          <div className="relative h-full w-full">
            <div className="bg-green-200 h-full w-fullrounded-lg justify-center items-center shadow-md flex flex-col">
              <br />
              <img
                className="w-[25%] shadow-md rounded-lg mx-auto"
                src={photo}
                alt="newItem"
              />
              <div className="flex flex-col justify-center items-center mx-auto text-center">
                <div>Describe your product</div>

                <select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                  <option>Electronics</option>
                  <option>Home product</option>
                  <option>Cloth</option>
                  <option>Metalic object</option>
                  <option>Other</option>
                </select>
                <br />

                <label htmlFor="description">
                  Describe the item (1000 caracter max)
                </label>
                <br />
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="input"
                />
                <br />

                <button
                  type="button"
                  className="border-2 border-green-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-green-600 transition duration-300"
                >
                  submit
                </button>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
