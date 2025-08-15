//Practice Questions

//Write a function grtGrade(score) that:
// Takes students marks (0 to 100)
// Return the grade based on this logic:
// 90-100 A+
// 80-89 A
// 70-79 B
// 60-69 C
// 33-59 D
// 0-32 Fail

function getVal(val) {
    if (val < 32) return 'Fail';
    else if (val < 59) return 'D';
    else if (val < 69) return 'C';
    else if (val < 79) return 'B';
    else if (val < 89) return 'A';
    else if (val <= 100) return 'A+';
    else return 'Invalid';
} //early return pattern
console.log(getVal(102))//calling the4 function
