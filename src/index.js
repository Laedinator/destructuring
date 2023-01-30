// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import { createRoot } from "react-dom/client";
import cars from "./practice";
import animals from "./data";

const container = document.getElementById("root");
const root = createRoot(container);

// const [cat, dog] = animals;

// const { name: dogName, sound: dogSound, feedingRequirements: {food: dogFood, water: dogWater}} = dog;
// const { name: catName, sound: catSound,feedingRequirements: {food: catFood, water: catWater}} = cat;
// console.log(dogFood);
// console.log("A " + catName + " " + catSound + "s");
// console.log("A " + dogName + " " + dogSound + "s");

const [honda, tesla] = cars;
console.log(tesla);

const {
  speedStats: { topSpeed: teslaTopSpeed },
  coloursByPopularity: [teslaTopColour],
} = tesla;
const {
  speedStats: { topSpeed: hondaTopSpeed },
  coloursByPopularity: [hondaTopColour],
} = honda;

root.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
);
