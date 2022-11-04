// return the k most frequent nums

function kMostFreq(nums, k) {
    let dict = {}
    for (let i=0; i<nums.length; i++) {
        if (nums[i] in dict) {
            dict[nums[i]] += 1
        } else {
            dict[nums[i]] = 1
        }
    }
    console.log(dict)
    // need k most freq keys
    let ans = []
    while (k > 0){
        let max = [0, 0]
        for (const [key, val] of Object.entries(dict)) {
            if ( val > max[0] ) {
                max[0] = key
                max[1] = val
            }
        }
        ans.push(max[0])
        delete dict[max[0]]
        k--
    }
    return ans
}


const nums1 = [1, 1, 1, 2, 2, 3]
const k1 = 3;
const expected1 = [1, 2]

console.log(kMostFreq(nums1, k1))