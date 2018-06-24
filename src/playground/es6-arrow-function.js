const square = function (x) {
    return x * x;
};

// arrow function
const squareArrow = (x) => {
    return x * x;
};

const squareTwo = (x) => x * x;

console.log(square(8));
console.log(squareArrow(9));

const myName = "Maike Scherer";

const getFirstName = (name) => name.split(" ")[0];

console.log(getFirstName(myName));

