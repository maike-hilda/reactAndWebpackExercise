class Person {
    // this runs when we create a new Person
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old!`;
    }
}

// subclass --> inheritance
class Student extends Person {
    constructor(name, age, major) {
        // call parent constructor function
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        // will return true or false
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` The major is ${this.major}!`
        }
        return description;
    }
}

const me = new Student("Maike Scherer", 29, "Math");
console.log(me.getDescription());

// create Traveller - a new subclass of Person
// Add support for homeLocation
// override getGreeting
// 1. Home location "Hi. I am Maike Scherer. I am visiting from Philadelphia."
// 2. "Hi. I am Maike Scherer."

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getDescription();
        if (this.homeLocation) {
            greeting += ` ${this.name} is visiting from ${this.homeLocation}.`
        }
        return greeting;
    }
}

const meTwo = new Traveller("Maike", 21);
console.log(meTwo.getGreeting());