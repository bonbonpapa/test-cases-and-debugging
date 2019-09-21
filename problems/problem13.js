let eq = (lhs, rhs) => {
    if (Array.isArray(lhs)) {
        for (let i = 0; i < lhs.length; i++) {
            if (lhs[i] !== rhs[i]) return false
        }
        return true
    }
    return lhs === rhs
}
let verifyEquals = (lhs, rhs) => {
    if (!eq(lhs, rhs)) throw new Error("The expected output doesn't match the actual output")
}
// we need 5 test cases. 
let inputs = [
    "RADAR",
    "JAVASCRIPT",
    "ABBA"

]

let outputs = [
    true,
    false,
    true
]

/*
Make this function return true if the input string is a palindrome, and false otherwise. A palindrome is simply a string that is the same if you reverse it.

RADAR -> Yes
JAVASCRIPT -> No
*/
function f(str) {
    let arr1 = [];
    for (let i = 0; i < str.length; i++)
        arr1.push(str[i]);
    let arr2 = [];
    for (i = 0; i < arr1.length; i++)
        arr2[i] = arr1[(arr1.length -1) - i];
    let newStr = arr2.join("");
    
    if (str === newStr)
        return true;
    else
        return false;

   }

function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual)
}

runTest(0);
runTest(1);
runTest(2);
// runTest(3);
// runTest(4);

console.log("All tests passed for " + __filename)