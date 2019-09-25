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
    [[0, 1, 2, 3], [1, 3, 4, 5]],
    [[1, 2, 3], [1, 2, 3]],
    [2, 3],
    [["oo","aa"],["aa","cc"]]
]

let outputs = [
    [0, 2, 4, 5],
    [],
    undefined,
    ["oo","cc"]
]

/*
Make this function return the elements that are unique to array1 and array2.
An element is unique if it only appears once.
If there are no unique elements return an empty array.
If the inputs are anything other than arrays, return undefined. 
For example:

uniqueElements([[0,1,2,3], [1,3,4,5]]); // [0,2,4,5]
uniqueElements([[1,2,3], [3,2,1]]); // []
uniqueElements(2); // undefined, not an array

HINTS: 
   - Use a for loop inside another for loop
*/

function getUniqueElements(arr1,arr2) {
    let uniqueElements= [];
    for (let i = 0 ; i < arr1.length; i++) {
        let num1 = arr1[i]
        let isUnique = true
        for (let j = 0; j < arr2.length; j++) {
            let num2 = arr2[j];
            if (num1 === num2) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) uniqueElements.push(num1);
    }
    return uniqueElements;
}

function getUniqueElements2(arr1,arr2) {
    
    return arr1.filter((num1) => arr2.every((num2)=> num1 !== num2)); 


}
function f(input) {
    const arr1 = input[0];
    const arr2 = input[1];

    if (! Array.isArray(arr1) || !Array.isArray(arr2)) return undefined;
    
    return getUniqueElements(arr1 , arr2).concat(getUniqueElements(arr2 , arr1));


}

function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
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
// runTest(4);

console.log("All tests passed for " + __filename)
