// arguments object - no longer bound with arrow functions

const add = function (a,b) {
    console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1000));

// this keywork - no longer bound

const user = {
    name: 'Apollo',
    cities: ['this', 'that', 'other'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city + '!');
    }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    numbers: [2, 3, 11],
    multiplyBy: 6,
    multiply() {
        return this.numbers.map((numX) => numX * this.multiplyBy);
    }
};
console.log(multiplier.multiply());
