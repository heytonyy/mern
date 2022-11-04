# Day 3 (MERN)

## <ins>Algorithms</ins>:
Insertion sort
```
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
```

## <ins>State</ins>
Allows to persit information
- Like session, but better
```
const [state, setState] = useState(initialState)
```
- `state` is the current state
- `setState` is a function that allows you to update the state
- `initialState` is the initial state
