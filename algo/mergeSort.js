nums1 = [1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10, 30 ]

console.log(`Unsorted Array:`)
console.log(nums1)
console.log(`Sorted Array:`)
console.log(mergeSort(nums1))

function merge(arrL,arrR){
  // vars
  const merged = []
  let Lindx = 0
  let Rindx = 0
  while (Lindx < arrL.length && Rindx < arrR.length){
    if (arrL[Lindx] < arrR[Rindx]){
      merged.push(arrL[Lindx])
      Lindx++
    } else {
      merged.push(arrR[Rindx])
      Rindx++
    }
  }
  // get the left overs
  while (Lindx < arrL.length){
    merged.push(arrL[Lindx])
    Lindx++
  }
  while (Rindx < arrR.length){
    merged.push(arrR[Rindx])
    Rindx++
  }
  return merged
}

function mergeSort(arr){
  // base case
  if (arr.length === 1){
    return arr
  }

  // towards base case
  const mid = Math.floor(arr.length/2)
  const leftArr = arr.slice(0,mid)
  const rightArr = arr.slice(mid, arr.length)

  const left = mergeSort(leftArr)
  const right = mergeSort(rightArr)

  // recursive call
  return merge(left,right)
}