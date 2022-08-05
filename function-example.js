/* Function Structure..!
--------------------------
function functionName(parameters){
    functionBody
    return
}
var returnValue = functionName(parameters value);
---------------------------
*/
function getTotal(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const avarage = total / 3;
    return avarage;
}


const assignment1 = 57;
const assignment2 = 59;
const assignment3 = 60;
var myAvarage = getTotal(assignment1, assignment2, assignment3);
console.log(myAvarage)