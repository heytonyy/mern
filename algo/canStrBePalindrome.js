const str1 = 'racecar'

const array = ['taco cat',
'my gym',
'red rum, sir, is murder',
'top spot',
'no lemon, no melon',
'never odd or even',
'',
]

function canStrBePalindrome(str) {
    const letterDict = {}
    if (str.length === 0){
        return false
    }
    for (const letter of str){
        // check if its a letter
        if (/^[a-zA-Z]+$/.test(letter)) {
            (letter in letterDict) ? delete letterDict[letter] : letterDict[letter]=1
        }
    }
    return Object.keys(letterDict).length <= 1
}


for (const pali of array) {
    console.log(canStrBePalindrome(pali))
}
