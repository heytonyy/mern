const example1 = 'b70a164c32a20c10'
const expected = 'a184b70c42'

console.log(rehash(example1))

function rehash(str){
    const hash = {}
    let result = ''
    for (let i=0; i<str.length; i++){
        let char = str[i]
        if (isNaN(char)) {
            (!(char in hash)) ? hash[char]=0 : null
        } else {
            let num = ''
            let pointer = i
            while (true) {
                if (!(isNaN(str[pointer]))){
                    num+=str[pointer]
                    pointer++
                } else {
                    if (str[i-1] in hash) {
                        hash[str[i-1]] += parseInt(num)
                    } else {
                        hash[str[i-1]] = parseInt(num)
                    }
                    i = pointer
                    break
                }
            }
        }
    }
    const sortedKeys = Object.keys(hash).sort()
    for (const key of sortedKeys){
        result+=`${key}${hash[key]}`
    }
    return result
}