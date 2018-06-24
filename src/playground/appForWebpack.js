// using utils.js and person.js

console.log("app.js is running");

// ./ is for our local files
// // import "./utils.js";

// // can only import needed things
// // name matters, order does not
// import subtract, { square, add } from "./utils.js";

// console.log(square(4));

// import senior, {isAdult, canDrink} from "./person.js";

// console.log(isAdult(20), canDrink(20));
// console.log(senior(64));

// named exports (as many as needed), default exports (just one)
// default doesn't have to be called by name; can be called anything

// bundle only includes things that are currently imported
// import validator from "validator";

// console.log(validator.isEmail("test@email.com"));

import React from "react";
import ReactDOM from "react-dom";

const template = <p>Test 123</p>;

ReactDOM.render(template, document.getElementById("app"));



