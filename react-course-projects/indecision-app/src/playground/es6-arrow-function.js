function square(x) {
    return x * x;
};

console.log(square(8));

const squareArrow = (x) => {
    return x * x;
};

const arrowX = (x) => x * x;
console.log(arrowX(5));

console.log(squareArrow(9));

const getFirstName = (x) => x.split(' ')[0];
console.log(getFirstName('Apollo Board'));