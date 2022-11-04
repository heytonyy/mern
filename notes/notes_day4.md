# Day 4 (MERN)

## <ins>Algorithms</ins>:
Merge Sort
See algo folder for code
2 function --> one recursive, one iterative

## <ins>React - Forms</ins>:
For text input, use `value` and `onChange` to control the input

```
const [name, setName] = useState('')
const nameHandler = (e) => {
    setName(e.target.value)
}
<input type='checkbox' onChange = {nameHandler} />
```


For checkboxes, use `checked` instead of `value` for the attribute
```
const [checked, setChecked] = useState(false)

const checkedHandler = (e) => {
    setChecked(e.target.checked)
}

<input type='checkbox' onChange = {checkedHandler} />
```
## <ins>React - Map and Filer</ins>:

