var nums1 = [1, 3, 4, 8, 10, 13, 20, 27]
var target = 3

//fix this later, skipping over target number
function binarySearch(sortednums, searchnum){
    //base case
    if (sortednums.length <= 2){
        return false
    }
    // move towards base case
    var left = 0
    var right = sortednums.length - 1
    var mid = Math.floor(sortednums.length/2)
    if (mid == searchnum){
        return true
    }
    if (searchnum < mid){
        right = mid - 1
    } else {
        left = mid + 1
    }
    sortednums = sortednums.slice(left, right + 1)
    console.log(sortednums)
    //call function
    return binarySearch(sortednums, searchnum)
}

console.log(binarySearch(nums1, target))