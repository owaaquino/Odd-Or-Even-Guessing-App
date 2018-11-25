import React from "react";

const Heading = props => {
  const changeHeader = number => {
    if (number % 2 === 0) {
      return "Even-Steven!!";
    }
    return "Odd-Todd!!";
  };

  return (
    <div>
      <h1>Odd or Even Guessing App</h1>
      <h2>
        {props.guess === 0
          ? "Please enter a number below"
          : changeHeader(props.guess)}
      </h2>
    </div>
  );
};

export default Heading;
