// problem 1 -- prime numbers
Number.prototype.isPrime = function() {
    // im getting 104003 when i use the sqrt of the num as the cap...?
    for( let i=2; i<Math.sqrt(this); i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}
const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime

while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

//problem 2 -- fibonacci
// recursive
// function rFib( n ) {
//     if ( n < 2 ) {
//         return n;
//     }
//     return rFib( n-1 ) + rFib( n-2 );
// }
// // iterative
// function iFib( n ) {
//     const vals = [ 0, 1 ];
//     while(vals.length-1 < n) {
//         let len = vals.length;
//         vals.push( vals[len-1] + vals[len-2] );
//     }
//     return vals[n];
// }
// const { performance } = require('perf_hooks');
// const start = performance.now();
// // --RECURSIVE--
// // const rfib20 = rFib(20);
// // console.log(`The 20th fibonacci term is ${rfib20}`);
// // console.log(`This took ${performance.now() - start} milliseconds to run`);
// // --ITERATIVE--
// const ifib20 = iFib(20);
// console.log(`The 20th fibonacci term is ${ifib20}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);


// problem 3
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

// const { performance } = require('perf_hooks');
// const start = performance.now();

// Array Methods -- 4.915982007980347 milliseconds
const reversed1 = story.split("").reverse().join("");
// Backwards For-Loop -- 4.64351499080658 milliseconds to run
const reversed2 = str => {
    let output = ''
    for (let i=str.length-1; i>-1; i--){
        output += str[i]
    }
    return output
}
// Recursive -- 4.752977967262268 milliseconds
function rrevered(str){
    if (str.length <= 1){
        return str
    }
    return rrevered(str.slice(1))+str[0]
}

// console.log(`REVERSE STRING: RECURSIVE`)
// console.log(`The story in reverse is:\n${rrevered(story)}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);
// console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
