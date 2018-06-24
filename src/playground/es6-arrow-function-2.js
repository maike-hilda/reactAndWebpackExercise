// arguments object - no longer bound with arrow functions
const add = function (a, b) {
    console.log(arguments); // prints all arguments
    return a + b;
};

const addTwo = (a, b) => {
    return a + b;
};

console.log(add(55, 1));

console.log(addTwo(1, 2));


// this keyword - no longer bound

const user = {
    name: "Maike",
    cities: ["LA", "Tustin", "LB"],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities)

        this.cities.forEach((city) => {
            console.log(this.name + " has lived in " + city); // this binds to the parent function i.e. the placesLived fctn
        });

        // this.cities.forEach(function (city) {
        //     console.log(this.name + "  has lived in " + city); // this does not work
        // });
    },
    // ES6 method definition syntax
    printPlacesLivedTwo() {

        // map method
        const cityMessages = this.cities.map((city) => {
            return city;
        })
        return cityMessages;
    }
};


user.printPlacesLived();

console.log(user.printPlacesLivedTwo());

// Challenge

const multiplier = {
    // numbers - array of numbers
    numbers: [1, 2, 3],
    // multiplyBy - single number
    multiplyBy: 4,
    // multiply - return a new array where the numbers have been multiplied
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());