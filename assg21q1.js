// Write a javascript function  called outerFunction that takes a parameter and returns an inner function.
// The inner function should access both the parameter of outerFunction and a variable declared within
// outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
// variables even after outerFunction has finished executing.

function outerFunction (outerParameter){
    let outerVariable = 'I am Outer Variable';

    return function innerFunction() {
        console.log('Outer parameter:', outerParameter);
        console.log('Outer variable:', outerVariable);
    };
    
}

const inner = outerFunction('I am inner Parameter');

inner();