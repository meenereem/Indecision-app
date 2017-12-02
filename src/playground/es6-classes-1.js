
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, location){
        super(name,age);
        this.location = location;
    }
    hasLocation() {
        return !!this.location;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.location){
            greeting += ` Their location is ${this.location}`;
        }
        return greeting;
    }
}

const me = new Traveler('Daniel Ng', 19, 'location');
console.log(me.getGreeting());

const other = new Student(undefined, undefined, 'Nowhere');
console.log(other.getDescription());
