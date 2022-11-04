nums1 = [1, 3, 5, 17, 13, 14, 20, 0, 2, 4, 70, 21, 22];

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let p = i
        // complex condition better bc breaks if you dont need
        // to swap since left side already in order.
        while (p > 0 && arr[p] < arr[p - 1]) {
            let temp = arr[p]
            arr[p] = arr[p - 1]
            arr[p - 1] = temp
            p--;
        }
    }
    return arr
}

console.log(insertionSort(nums1))