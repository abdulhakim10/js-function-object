// function isLeapYear(year) {
//     const remainder = year % 4;
//     if (remainder === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    return false;
}

console.log(isLeapYear(1948));
