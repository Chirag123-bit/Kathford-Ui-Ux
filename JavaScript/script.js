// console.log("Hello World");
// alert("This is an alert");

// var userName = prompt("Enter Your Name: ");
// console.log(userName);

// Let, const, var

// Data Types (String, Boolean, Numbers, Array, Objects)

// String
// var str1 = "Hello";
// var str2 = "2";
// console.log(str1 + str2);

// Numbers
// var num1 = 10;
// var num2 = 10.5;
// var var4 = "a";
// console.log(num1 * var4);

// Booleans
// var bool1 = true;
// var bool2 = false;

// Arrays
// var arr1 = [1, 2, "Hello", 10.22, [1, 2, 3]];

// Objects
// const obj1 = {
//   name: "Chirag",
//   age: 30,
//   address: "Kathmandu",
// };
// obj1.name = "asdsadasds";
// console.log(obj1);
// console.log(obj1.name);

// Array Methods (Push, pop, slice, splice, toString, join,
//               shift, unshift, concat, splice, slice)

// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr2);
// arr2.push(10);
// arr2.pop();
// arr2.shift();
// arr2.unshift(10);
// console.log(arr2.slice(4));
// arr2.splice(4, 0, 10, 50, 60);
// // let arr3 = arr2.toString();
// let arr3 = arr2.join(" ");
// console.log(arr3);
// console.log(arr1.concat(arr2));

// Arithmetic Operators (+,-,*,/,%, **)

// + Add for Numbers, Concat For Strings
var a = 10;
var b = "20";
console.log(a + b);

// %

console.log(15 % 10);

// **
console.log(2 ** 5);

// For Loops
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Print all even numbers from 1 – 10
// for (let i = 2; i <= 10; i = i + 2) {
//   console.log(i);
//   // if (i % 2 == 0) {
//   //   console.log(i);
//   // }
// }

// var userName = "Ram";
// var dob = "1900-01-01";
// console.log("Your Name is " + userName + " and your DOB is " + dob);
// console.log(`Your Name is ${userName} and Your DOB is ${dob}`);

// Write a program to find multiplication tables
// const num = prompt("Enter a Number");
// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} X ${i} = ${num * i}`);

//   // console.log(num + " X " + i + " = " + (num * i));
// }

// Create a length converter program
// const meters = prompt("Enter the length in Meters");
// console.log(`The distance is ${meters / 1000}KM`);

// const arr5 = ["Hello", "World", 1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr5.length; i++) {
//   console.log(arr5[i]);
// }

// for (i of arr5) {
//   console.log(i);
// }

//Calculate Sum of Array
// const arr = [10, 20, 37, 45, 52];
// var sum = 0;
// for (i of arr) {
//   sum = sum + i;
// }
// console.log(sum);

// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }

// Create a program that reverses an array
// const arr = [10, 20, 37, 45, 52];
// let arr1 = [];
// const arrLength = arr.length;

// for (let i = 0; i < arrLength; i++) {
//   arr1.push(arr.pop());
// }

// console.log(arr1);

// Remove the spaces found in a string (Hello World) => HelloWorld
// let str = "Hello World Hello";
// console.log(str.replaceAll(" ", ""));

// Return the number of vowels in a string
let str = "Hello World All";
str = str.toLowerCase();
let vowels = 0;
for (let i = 0; i < str.length; i++) {
  if (
    str[i] == "a" ||
    str[i] == "e" ||
    str[i] == "i" ||
    str[i] == "o" ||
    str[i] == "u"
  ) {
    vowels += 1;
  }
}
console.log("The Count of vowels is: " + vowels);
