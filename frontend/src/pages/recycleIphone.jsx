function RecycleIphone({ photo }) {
  return (
    <div className="bg-green-200 bg-center h-full w-full  p-10 text-black">
      <div className="rounded-lg">
        <img
          className="md:animate-spin rounded-lg transform"
          src={photo}
          alt={photo}
        />

        <h3 className="mt-10">Recycler</h3>

        <li>hola</li>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </div>
    </div>
  );
}

export default RecycleIphone;
