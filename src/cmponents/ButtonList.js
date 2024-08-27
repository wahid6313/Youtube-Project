import React from "react";
import Button from "./Button";

const buttonNames = [
  "All",
  "Live",
  "Gamings",
  "Computer Scie.",
  "Gadget",
  "Unboxings",
  "Villages",
  "Sports",
  "News",
  "4k Resolutions",
  "Airports",
  "Shoppings",
  "Gadget",
  "Architectures",
  "Unboxings",
  "Villages",
  "Sports",
];

const ButtonList = () => {
  return (
    <div className="flex ml-10">
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
