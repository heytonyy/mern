const nums1 = [2, 11, 7, 15]
const targetSum1 = 26
// nums[0]+nums[2] = 2 + 7 = 9

console.log(twoNumSum(nums1, targetSum1))

function twoNumSum(nums, tar) {
    let dict = {}

    // saves a key for the pair value, with the index as the value
    for (let i=0; i<nums.length; i++){
        // add pair to dictionary
        dict[tar - nums[i]] = i

        // check if pair is in dictionary
        if (nums[i] in dict){
            return [dict[nums[i]], i]
        }
    }

    return -1
}


// if(dict.hasOwnProperty(nums[j]))