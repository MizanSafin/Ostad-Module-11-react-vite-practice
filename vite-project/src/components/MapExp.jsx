import React from "react";

function MapExp() {
  let listsOfCities = ["Dhaka", "Rajshahi", "Naogaon", "Rangpur", "Barishal"];
  return (
    <ol>
      {listsOfCities.map((city, index) => {
        return (
          <li
            key={index.toString()}
            style={{ color: "red", fontSize: "30px", fontFamily: "tahoma" }}
          >
            The {index + 1} no. city is {city}
          </li>
        );
      })}
    </ol>
  );
}

export default MapExp;
