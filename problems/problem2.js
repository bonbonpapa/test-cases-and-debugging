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
    "abc", "ef ", "ggg","noddddddd1", "bbbbb%"
    
]

let outputs = [
    "c",undefined, "g", undefined, undefined
]

// Make this function return the last letter of the string that is passed to it. If the string does not have a last letter, return undefined
function f(str) {
    let nLength = str.length;
    let lLetter = str.charAt(nLength - 1);
    if (lLetter.toUpperCase() !== lLetter.toLowerCase())
        return lLetter;
    return undefined;  

}

function runTest(i) {
    let expected = outputs[i];
    console.log(expected);

    let actual = f(inputs[i]);
    console.log(actual);
    verifyEquals(expected, actual)
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
console.log("All tests passed for " + __filename)