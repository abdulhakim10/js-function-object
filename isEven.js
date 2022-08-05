function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}

const myNunberIsEven = 35;
console.log(isEven(35));

const herNumberIsEven = 44;
console.log(isEven(44));