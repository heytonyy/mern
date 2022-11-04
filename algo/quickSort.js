nums1 = [1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10, 30 ]
console.log(`Unsorted Array:`)
console.log(nums1)
quickSort(nums1)
console.log(`Sorted Array:`)
console.log(nums1)


function quickSort(nums, low=0, high=nums.length-1){
    // base case
    if (low >= high){
        return
    }
    // towards base case --> partition & swapping
    let pivot = partition(nums, low, high)
    // recursive call --> lower & higher sub-arrays call
    quickSort(nums, low, pivot)
    quickSort(nums, pivot + 1, high)
}

function partition(arr, low, high){
    let randIdx = Math.floor(Math.random()*arr.length)
    let pivot = arr[randIdx]
    let i = low
    let j = high

    while (true) {
        while (true) {
            if (arr[i] >= pivot){
                break
            }
            i++
        }
        while (true) {
            if (arr[j] <= pivot){
                break
            }
            j--
        }
        if (i >= j) {
            return j
        }
        // swap(arr, i, j)
        [ arr[j], arr[i] ] = [ arr[i], arr[j] ]
    }
}

function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}