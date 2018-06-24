console.log("utils.js is running");

const square = (x) => x * x;
const add = (x, y) => x + y;

// exports - default export - named exports

//default exports

const subtract = (a, b) => a - b;

// put references to statements you want to export
// this is called named exports
export { square, add, subtract as default };

// or
// export const square = ...
// export add = ...
// const subtract = ...
// export default subtract;
// or 
// export default (a, b) => a - b;