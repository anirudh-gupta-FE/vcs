import Spot from "./components/Spot";

const touristPlaces = [
  {
    placeName: "Goa",
    desc: "Famous for its beaches, nightlife, and Portuguese heritage.",
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    whenToVisit: "Winter",
    ratings: 4.5,
    price: 15000,
  },
  {
    placeName: "Manali",
    desc: "A high-altitude Himalayan resort town known for its cool climate and snow-capped mountains.",
    img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    whenToVisit: "Summer",
    ratings: 4.7,
    price: 10000,
  },
  {
    placeName: "Kerala",
    desc: "Known for its palm-lined beaches, backwaters, and rich traditions.",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    whenToVisit: "Winter",
    ratings: 4.8,
    price: 20000,
  },
  {
    placeName: "Jaipur",
    desc: "The capital of Rajasthan, known for its historic palaces and vibrant culture.",
    img: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    whenToVisit: "Winter",
    ratings: 4.6,
    price: 12000,
  },
];

function App() {
  return (
    <>
      <h1 className="text-center text-5xl">Welcome to MakeMyVactaion</h1>
      <div className="flex my-7 mx-3 justify-between">
        {touristPlaces.map((spot) => (
          <Spot
            placeName={spot.placeName}
            desc={spot.desc}
            img={spot.img}
            whenToVisit={spot.whenToVisit}
            ratings={spot.ratings}
            price={spot.price}
          />
        ))}
      </div>
    </>
  );
}

export default App;
