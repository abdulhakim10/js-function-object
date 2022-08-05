function inchesTofeet(inches) {
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchesTofeet(144);

console.log(dadaFeet);

const nanaFeet = inchesTofeet(68);
const towDesimal = nanaFeet.toFixed(2);

console.log(towDesimal);