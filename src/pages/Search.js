import { Link, useParams } from "react-router-dom";

const Search = () => {
  const params = useParams();

  return (
    <>
      <h1>search {params.id}</h1>
      <p>
        This is where your location is logged and you choose the distance you
        want to travel to get to the nearest food bank. we will use googlemaps
        to track location of user and SQLdistance to get a return of local
        places/miles
      </p>
      <Link to="/">Home</Link>
    </>
  );
};

export default Search;

// doc. for params - https://reactrouter.com/docs/en/v6/faq

// free geolocation api:
// https://ipgeolocation.io/