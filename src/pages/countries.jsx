import { useState, useEffect } from "react";
import axios from "axios";

function Countries() {
  const [countries, setCountries] = useState([]);

  console.log("render!");

  useEffect(() => {
    console.log("mount");

    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((res) => {
        setCountries(res.data);
      });

    return () => {
      console.log("unmount");
    };
  }, []);

  if (countries.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country._id}>{country.name.common}</li>
      ))}
    </ul>
  );
}

export default Countries;
