/*
left to right diaggonal, top to bottom --> 1 + 2 + 3 + 4 + 5 = 15
right to left diaggonal, top to bottom --> 5 + 4 + 3 + 2 + 1 = 15
absolute diff = 0
*/
const ex1 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
]
//let expected = 0

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
console.log(`Diagonal Difference: ${diagDiff2(ex1)}`)
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)

function diagonalDiff(matrix){
    let LtoR = 0
    let RtoL = 0
    for (let i=0; i<matrix.length; i++) {
        LtoR += matrix[i][i]
    }
    for (let j=matrix.length-1; j>=0; j--) {
        RtoL += matrix[j][j]
    }
    console.log(`Left to Right sum: ${LtoR}`)
    console.log(`Right to Left sum: ${RtoL}`)
    return Math.abs(LtoR - RtoL)
}

function diagDiff2 (matrix) {
    let LtoR = 0
    let RtoL = 0
    for (let i=0; i<matrix.length; i++) {
        LtoR += matrix[i][i]
        RtoL += matrix[i][matrix.length-1-i]
    }
    console.log(`Left to Right sum: ${LtoR}`)
    console.log(`Right to Left sum: ${RtoL}`)
    return Math.abs(LtoR - RtoL)
}