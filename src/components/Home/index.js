import React, { useState } from "react";
import "./style.css";

const Home = () => {
  const [city, setCity] = useState("");
  //   const [info, setInfo] = useState();
  //   const [error, setError] = useState();
  //   const [localizedName, setLocalizedName] = useState();

  const baseurl = "http://dataservice.accuweather.com";
  const apikey = "sBSyzE4BPdAn75z8f9IDpWKw8GA5CBdj";

  const handleInput = (e) => {
    setCity(e.target.value);
    console.log(city);
  };

  const handleSubmit = async (e) => {
    if (city === "") return;
    else {
      try {
        const response = await fetch(
          `${baseurl}/locations/v1/cities/search?apikey=%20${apikey}&q=${city}`
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return (
    <>
      <form>
        <input
          type="text"
          className="textbox"
          onChange={handleInput}
          value={city}
          placeholder="Enter the city name"
        />
        <button type="button" className="btn" onClick={handleSubmit}>
          Display weather Info
        </button>
      </form>
    </>
  );
};

export default Home;
