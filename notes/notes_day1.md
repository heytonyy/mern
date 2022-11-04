# Day 1 (MERN)

Javascript is multi paradim --> mostly used as a functional programing language
Javascript has OOP, but not best with it.
If OOP, use something like python/java.

GOODBYE var. We will replace with const and let
var is global scoped, can cause some scoppe errors

**let** --> defined in the scope, can be reassigned

**const** --> cannot be reassigned

Use let with for loops for index

<br>

# DESTRUCTURING
```
const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// destructurre
const { email, password } = person;
const [firstAnimal, secondAnimal, thirdAnimal] = animals;
```

# SPREAD OPERATOR
```
const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};

const newPerson {
    ...person,
    firstName: 'Tony',
    lastName: 'Aiello',
}
console.log(newPerson)
/*
    firstName: 'Tony', 
    lastName: 'Aiello', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
*/
```
if spread is before, copy of person, then replace values
if spread after, spread will override values

<br>

# ARROW FUNCTION
```
const arrow = () => //one line function, implicit return

const arrow2 = () => {
    //multi line function
    //must return
}
```

# TERNARY OPERATORS
```
// old if-statement
let age = 32;
if (age == 32){
    return 'You are 32.';
} else {
    return 'You are NOT 32.';
}

// ternary operator
(age === 32) ? console.log('You are 32.') : console.log('You are NOT 32.')

```
# INHERITANCE

Classes can "inherit" the attritubtes and methods of another class
```
class Human {
    constructor(){

    }
    method1(){

    }
    ...
}
class Coder extends Human {
    constructor(){
        super() //this is taking from human
    }
    method1(){
        // will override from human if same name
    }
    ...
}
```
<br>

# 4 Pillars of OOP:
### Abstraction
### Polymorphism
### Inheritence
### Encapsalation



<br>
<hr>
Markdown Cheatsheet: https://www.markdownguide.org/cheat-sheet/