const numbers = [1, 2, 3, 4, 5];

const newArray = numbers.map((elements => elements * 2));

console.log(newArray);

// the blow is filter method

const filtered = numbers.filter((elements => elements >= 3));

console.log(filtered);

// Reducer Method applies reducer to accumulate everything in arrays and brings single outputs

const reduceApp = numbers.reduce((accumulator, element) => accumulator + element, 0);

console.log(reduceApp);

// some method is used for checking wether atleast one element satisfies the conditions

const someFunction = numbers.some((element => element % 2 === 0 ));
console.log(someFunction);

// every method checks all elements satisfy the condition

const found  = numbers.find((element => element % 2 === 0))
console.log(found);

// sorting methods
const unsorted = [2, 1, 5, 7, 6, 10, 9];
unsorted.sort((a, b)=> a-b);
console.log(unsorted);

//list of strings  
const texts = ["Apple", "Banana", "Orange"];
console.log(texts);
const removed = texts.pop();
const shiftedElement = texts.shift();
console.log(shiftedElement);
console.log(removed);