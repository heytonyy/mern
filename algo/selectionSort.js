// iterate through arr
// find index of largest number
// put largest number at end
// loop again, one less bc larget at end

nums1 = [1, 5, 8, 10, 23, 45, 20, 26, 37]

console.log(selectionSort(nums1))

function selectionSort(arr){
    for (let i=0; i<arr.length; i++){
        let maxI = 0
        for (let j=1; j<arr.length-i; j++){
            if ( arr[maxI] < arr[j] ){
                maxI = j
            }
        }
        let temp = arr[maxI]
        arr[maxI] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    return arr
}