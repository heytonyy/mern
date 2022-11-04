const nums1 = [1,4,5,7,8,11]
const expected = [
    {i: 4, n: 6},
    {i: 7, n: 10}
]

console.log(allNonConsec(nums1))

function allNonConsec(arr) {
    let returnArr = []
    for (let i=1; i<arr.length; i++){
        if (arr[i] - arr[i-1] !== 1){
            returnArr.push({
                'i': i,
                'n': arr[i]
            })
        }
    }
    return returnArr
}
