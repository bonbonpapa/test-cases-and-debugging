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
function f(input) {
    if( !Array.isArray(input) || 
        !Array.isArray(input[0]) ||
        !Array.isArray(input[1]) )
        return undefined;
    
    let rtArr = [];
    let i = 0;
    let j = 0;
    let sameElement = false;
    for (i = 0 ; i < input[0].length ; i++)
    {
        sameElement = false;
        for (j = 0 ; j < input[1].length; j++)
        {
            if (input[0][i] === input[1][j])
            {
                sameElement = true;
                break;
            }                
        }
        if(!sameElement)
                rtArr.push(input[0][i]);
    }
    
    sameElement = false;
    for (i = 0 ; i < input[1].length ; i++)
    {
        sameElement = false;
        for (j = 0 ; j < input[0].length; j++)
        {
            if (input[1][i] === input[0][j]) // can we judege the object equlity with ===?
            {
                sameElement = true;
                break; // how to break out from tow layer loop
            }
                
        }
        if(!sameElement)
                rtArr.push(input[1][i]);
    }
    return rtArr;

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
