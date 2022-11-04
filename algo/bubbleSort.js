nums1 = [1, 3, 5, 17, 13, 14, 20, 0, 2, 4, 70, 21, 22];

console.log(bubbleSort(nums1))

function bubbleSort(arr){
    for (let i=0; i<arr.length; i++){
        for (let k=0; k<arr.length-i; k++){
            if (arr[i] > arr[k]){
                let temp = arr[k]
                arr[k] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}