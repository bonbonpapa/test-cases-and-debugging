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

// We need 5 test cases. I provided 1 input
let inputs = [
    "abc", "0bcd", " ABC", "DEF", "ZZZ"
]

let outputs = [
    "a", undefined, undefined, "D", "Z"
]

// Make this function return the first letter of the string that is passed to it. If the string does not have a first letter, return undefined
function f(str) {
    let fletter = str.charAt(0);
    if (fletter.toUpperCase() !== fletter.toLowerCase())
        return fletter;
    return undefined;  
}

function runTest(i) {
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual) 
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
console.log("All tests passed for " + __filename)
