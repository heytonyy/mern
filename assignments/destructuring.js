//problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
/*
Prediction:
    First console.log should print 'Tesla'
    Second console.log should print 'Mercedes'
*/
console.log(randomCar)
console.log(otherRandomCar)


// -------------------------------------------------------------------
//problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
/*
Prediction:
    First console log will make a parse error bc no declaration of name
    Second console log should print 'Elon' but wont bc error on previous statement
*/
console.log(name);
console.log(otherName);


// -------------------------------------------------------------------
//problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
/*
Prediction:
    First console.log will print '12345'
    Second console.log will be a runtime error? person doesnt have attribute password
        After testing, it didnt have an error, just undefine.
*/
console.log(password);
console.log(hashedPassword);


// -------------------------------------------------------------------
//problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
/*
Prediction:
first=2
second=5
third=2
    First console.log --> false
    Second console.log --> true
*/
console.log(first == second);
console.log(first == third);

// -------------------------------------------------------------------
//problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
/*
key = 'value'
secondKey = [1,5,1,8,3,3]

Prediction:
    1. print 'value'
    2. print [1,5,1,8,3,3]
    3. print 1
    4. print 5?
*/
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// -------------------------------------------------------------------