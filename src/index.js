// ======================
//      VARIABLES
// ======================
// veggie = "carrot"
// veggie = "onion"

let veggie = "carrot";
veggie="onion";

// =========================
//      DATA STRUCTURES
// =========================

// animals = ["tiger", "panda", "raccoon"]
// animals.append("opossum")

let animals = ["tiger", "panda", "raccoon"];
animals.push("opossum");

// dog = {"name": "Sprinkles", "age": 3}
// dog["is_friendly"] = True

let dog = {"name": "Sprinkles", "age": 3};
dog["is_friendly"] = true;

// =================
//       LOOPS
// =================

// num = 5
// for i in range(num):
//    print(i)

const num = 5;
for (let i = 1; i <= num; i++) {
    console.log(i);
}

// for animal in animals:
//    print(animal)

for (let animal in animals) {
    console.log(animal);
}

// for k, v in dog.items():
//    print(f"{k}: {v}")

for (let [k, v] in dog.entries()) {
    console.log(`${k}: ${v}`);   
}

// ===================================
//       FUNCTIONS / CONDITIONALS
// ===================================

// def fizzbuzz(num):
//    if num % 3 == 0 and num % 5 == 0:
//        return "fizzbuzz"
//    elif num % 3 == 0:
//        return "fizz"
//    elif num % 5 == 0:
//        return "buzz"
//    else:
//        return num


// Old way: Function Declaration
function fizzbuzz(num){
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 == 0) {
        return "buzz";
    } else {
        return num
    }
}

// ES6 way: Function Expression

const fizzBuzz = function(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 == 0) {
        return "buzz";
    } else {
        return num
    }
}

// ======================
//       CLASSES
// ======================

// class Animal:
//    def __init__(self,species,name):
//        self.species = species
//        self.name = name
//
//    def __str__(self):
//        return f"{self.name} is a {self.species}"

class Animal{
    constructor(species,name){
        this.species = species;
        this.name = name;
    }
    toString() {
        return `${this.species} by ${this.name}`;
    }
}

// class Dog(Animal):
//    def __init__(self, name, trick):
//        super().__init__(species="dog", name=name)
//        self.trick = trick
//
//    def __str__(self):
//        return f"{super().__str__()} that can {self.trick}"

class Dog extends Animal {
    constructor(name, trick, species) {
        super(name, species="dog");
        this.trick = trick;
    }
    toString() {
        return `${super.species} by ${this.trick}`;
    }
}
