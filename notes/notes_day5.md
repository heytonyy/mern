# Day 5 (MERN)

## <ins>Algorithms</ins>:
### Quick Sort
check my algo in the folder
Multiple ways to do this? I think my way makes the most sense to me.

```
function partition(arr, low, high){
    let randIdx = Math.floor(Math.random()*arr.length)
    let pivot = arr[randIdx]
    let i = low
    let j = high

    while (true) {
        //move left pointer
        while (true) {
            if (arr[i] >= pivot){
                break
            }
            i++
        }
        // move right pointer
        while (true) {
            if (arr[j] <= pivot){
                break
            }
            j--
        }
        //are they the same? if so break
        if (i >= j) {
            return j
        }
        //if not the same, swap
        [ arr[j], arr[i] ] = [ arr[i], arr[j] ]
    }
}
```

## <ins>REACT - Lifting State</ins>:

