/*
FOR INTERVIEWS... talk about...
R - reiterate
I - input 
O - output
T - test cases
*/

const ex1 = [0,1,2,2,2,7]
const ex2 = [2,2,6,6,7]

console.log('\n')
console.log('ORIGINAL ARRAY:')
console.log(`ARRAY 1: ${ex1}`)
console.log(`ARRAY 2: ${ex2}`)
console.log('\n')
console.log('INTERSECTION:')
console.log(intersection(ex1,ex2))
console.log('\n')
console.log('MULTI-UNION:')
console.log(multiUnion(ex1,ex2))

function intersection(nums1=[],nums2=[]) {
    let p1 = 0
    let p2 = 0
    let result = []
    while (p1<nums1.length || p2<nums2.length){
        if (nums1[p1] == nums2[p2] && !result.includes(nums1[p1])) {
            result.push(nums1[p1])
            p1++
            p2++
        } else if (nums1[p1]<nums2[p2]) {
            p1++
        } else {
            p2++
        }
    }
    return result
}

function multiUnion (nums1=[],nums2=[]) {
    let p1 = 0
    let p2 = 0
    let result = []
    while (p1<nums1.length || p2<nums2.length){
        if (nums1[p1] == nums2[p2]) {
            result.push(nums1[p1])
            p1++
            p2++
        } else if (nums1[p1]<nums2[p2]) {
            result.push(nums1[p1])
            p1++
        } else {
            result.push(nums2[p2])
            p2++
        }
    }
    return result
}