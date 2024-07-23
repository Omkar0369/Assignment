// Task 1
// Use map to convert an array of numbers into an array of their cubes.
// Write a JavaScript function that takes an array of numbers as input and returns a new array containing the cubes of each number.
 
function cube(num){
    return num.map(num=>num**3)
}
let num=[1,2,3,4,5]
let cubes= cube(num)
// console.log(cubes)

// Task 2: Use reduce to find the sum of all elements in an array.
// Write a JavaScript function that takes an array of numbers as input and returns the sum of all elements.
 
let arr1=[1,2,3,4,5]

function sumOfNo(arr1){
    return arr1.reduce((prev,og)=> prev+og)
}
// console.log(sumOfNo(arr1))

// Task 3: Use filter to find all prime numbers in an array.
// Write a JavaScript function that takes an array of numbers as input and returns a new array containing only the prime numbers.

let arr2=[]
for( let i=0 ;i<100;i++){
    arr2.push(i)
}
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
let arr21=arr2.filter((arr2)=> isPrime(arr2))
// console.log(arr21);

// task 4
// Task 4: Use map, reduce, and filter to calculate the average of squared odd numbers in an array.
// Write a JavaScript function that takes an array of numbers as input and calculates the average of the squares of all odd numbers in the array.
 
oddNos=arr2.filter((arr2)=>arr2%2==1)
// console.log(oddNos);

squareOfOdd=oddNos.map(nos=>nos**2)
// console.log(squareOfOdd);

sumNos=squareOfOdd.reduce((prev,curr)=>prev+curr,0)
// console.log(sumNos);
const avg=squareOfOdd.length>0?sumNos/squareOfOdd.length:0
// console.log(avg);

// Task 5
// Task 5: Use map, reduce, and filter to find the longest string in an array of strings.
// Write a JavaScript function that takes an array of strings as input and returns the longest string from the array.

const strings = ['apple', 'banana', 'kiwi', 'pineapple', 'grapefruit'];
const longestString = findLongestString(strings);

function findLongestString(strings){
    len=strings.map(str=>str.length)

    maxLen=len.reduce((max,length)=>Math.max(max,length),0)

    return strings.filter(str=>str.length===maxLen)
   
}

// console.log(findLongestString(strings));


// Task 6: Use map to capitalize the first letter of each word in a sentence.
// Write a JavaScript function that takes a sentence as input and returns the sentence with the first letter of each word capitalized.

// console.log(strings.map(word=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()))

// Task 7: Use filter to find all students who passed the exam.
// Write a JavaScript function that takes an array of student objects (with properties name and score) as input and returns an array containing only the students who passed the exam (scored 60 or above).

let studentrecs=[
    {sname: "Omkar", score: 72 },
    {sname: "kaustubh", score:55 },
    {sname: "Aryaman", score:66 }
]

function pass(recs){
    return recs.filter((student)=>student.score>=60)
}
// console.log(pass(studentrecs));

// Task 8: Create a Private Counter for Multiple Instances
// Write a closure-based function that creates multiple instances of a private counter. Each instance should have its own count, independent of the others. For example:
 
// const counter1 = createInstanceCounter();
// const counter2 = createInstanceCounter();
 
// console.log(counter1()); // Output: 1
// console.log(counter1()); // Output: 2
// console.log(counter2()); // Output: 1
// console.log(counter2()); // Output: 2

function createInstanceCounter(){
    let count=0

    return  function(){
            count+=1
            return count
        }
}
const counter1 = createInstanceCounter();
const counter2 = createInstanceCounter();
// console.log(counter1()); // Output: 1
// console.log(counter2()); // Output: 1
// console.log(counter2()); // Output: 2
// console.log(counter1()); // Output: 2
// console.log(counter2()); // Output: 3

// Task 9: Create a Promise-Based Calculator
// Write a Promise-based calculator that takes two numbers and an operation (addition, subtraction, multiplication, or division) as input. Perform the corresponding operation and resolve the Promise with the result. Handle division by zero and any invalid operations by rejecting the Promise with an appropriate error message.

function promiseCalculator(num1, num2, operation) {
  return new Promise((resolve, reject) => {
    switch (operation) {
      case 'add':
        resolve(num1 + num2);
        break;
      case 'sub':
        resolve(num1 - num2);
        break;
      case 'mul':
        resolve(num1 * num2);
        break;
      case 'divide':
        if (num2 === 0) {
          reject(new Error('Cannot divide by zero'));
        } else {
          resolve(num1 / num2);
        }
        break;
      default:
        reject(new Error('Invalid operation'));
    }
  });
}


// // Example usage
// promiseCalculator(5, 10, 'add').then(result => console.log(result))  // Output: 15
// promiseCalculator(5, 14, 'sub').then(result => console.log(result))  // Output: -9
// promiseCalculator(15, 10, 'mul').then(result => console.log(result))  // Output: 150
// promiseCalculator(2, 0, 'divide').then(result => console.log(result)) 
// promiseCalculator(10, 2, 'divide').then(result => console.log(result))  // Output: 5
// promiseCalculator(10, 2, 'unknown').then(result => console.log(result))  


// Task 10: Calculate Total Score
// Write a JavaScript function that takes an array of objects, where each object contains a property score, and uses the forEach method to calculate the total score of all the objects in the array. Return the total score as the output.

let property=[
    {sname: "Omkar", pscore: 72 },
    {sname: "kaustubh", pscore:55 },
    {sname: "Aryaman", pscore:66 }
]

function calScore(property){
    let sum=0
    property.forEach(prop=>sum+=prop.pscore)
    return sum

}
const totalScore=calScore(property)
console.log(totalScore);