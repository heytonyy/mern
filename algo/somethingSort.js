nums1 = [1, 3, 5, 17, 13, 14, 20, 0, 2, 4, 70, 21, 22];

console.log(insertionSort(nums1))

// what sort is this?
function insertionSort(nums){
    for (var i=0; i<nums.length; i++){
        for (var k=i+1; k<nums.length; k++){
            if (nums[i] > nums[k]){
                var temp = nums[k]
                nums[k] = nums[i]
                nums[i] = temp
            }
        }
    }
    return nums
}
