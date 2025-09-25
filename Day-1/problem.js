// Q1. Print "Hello World"
// Q2. Swap two numbers
// Q3. Sum of two numbers
// Q4. Find largest of two numbers
// Q5. Check even/odd

// 1️⃣ Print "Hello World"
const greet = () => {
  console.log("Hello World!");
};
greet(); // Output: Hello World!

// 2️⃣ Swap two numbers
let num1 = 10;
let num2 = 20;
console.log("Before swap:", num1, num2);

// ✅ Using destructuring (modern way)
[num1, num2] = [num2, num1];
console.log("After swap:", num1, num2);

// 3️⃣ Sum of two numbers
const sumOfTwo = (a, b) => {
  return a + b;
};
console.log("Sum:", sumOfTwo(100, 20)); // Output: 120

// 4️⃣ Find largest of two numbers
const largestOfTwo = (a, b) => {
  return a > b ? a : b;
};
console.log("Largest:", largestOfTwo(10, 50)); // Output: 50

// 5️⃣ Check even/odd
const isEvenOdd = (num) => (num % 2 === 0 ? "Even" : "Odd");

console.log("Check:", isEvenOdd(2)); // Output: Even
console.log("Check:", isEvenOdd(7)); // Output: Odd
