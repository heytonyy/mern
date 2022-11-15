const example1 = 'b70a164c32a20c10'
const expected = 'a184b70c42'

console.log(rehash(example1))

function rehash(str){
    const hash = {}
    for (let i=0; i<str.length; i++){
        let char = str[i]
        if (isNaN(char)) {
            (!(char in hash)) ? hash[char]=0 : null
        } else {
            let num = ''
            let pointer = i
            const letter = str[i-1]
            while (true) {
                let current = str[pointer]
                if (!(isNaN(current))){
                    num += current
                    pointer++
                } else {
                    (letter in hash) ? hash[letter] += parseInt(num) : hash[letter] = parseInt(num);
                    i = pointer
                    break
                }
            }
        }
    }
    let result = ''
    const sortedKeys = Object.keys(hash).sort()
    for (const key of sortedKeys){
        result+=`${key}${hash[key]}`
    }
    return result
}