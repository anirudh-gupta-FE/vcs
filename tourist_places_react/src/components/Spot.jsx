function Spot({ placeName, desc, img, whenToVisit, ratings, price }) {
  return (
    <div className="w-80 h-1/2 border-2 border-gray-200 p-2 rounded-md">
      <div className="mx-auto h-48 relative">
        <img
          className="w-[100%] h-[100%] object-cover rounded-md"
          src={img}
          alt=""
        />
        <p className="bg-green-300 text-sm text-green-800 absolute bottom-3 left-3 py-1 px-2 rounded-md">
          {price < 12000 ? "Cheaper" : "Expensive"}
        </p>
      </div>

      <h1 className="text-3xl text-center">{placeName}</h1>
      <p>{desc}</p>
      <p>Rating: {ratings}</p>
      <p>
        {whenToVisit === "Winter"
          ? "Best Time to visit is during Winter"
          : "Best Time to visit is during Summer"}
      </p>
    </div>
  );
}

export default Spot;
