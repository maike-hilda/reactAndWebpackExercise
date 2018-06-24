var nameVar = "Maike";
var nameVar = "Derek" // potentially a problem that I am overwriting
nameVar = "Murph" // reassign

console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Kelly"; // can reassign but not overwrite

console.log("nameLet", nameLet);

const nameConst = "Frank"; // cannot reassign or overwrite

console.log("nameConst", nameConst);

// Block scoping

var fullName = "Maike Scherer";

if (fullName) {
    var firstName = fullName.split(" ")[0];
    console.log(firstName);
}

// var based variables are function scoped i.e. if it's in a function, we don't have access to it
console.log(firstName);

if (fullName) {
    const firstName = fullName.split(" ")[0];
    console.log(firstName);
}

// var based variables are function scoped i.e. if it's in a function, we don't have access to it
// console.log(firstName); won't work for let and const

