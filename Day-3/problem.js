// 📝 JavaScript Practice Questions

// Q1. Sum of Numbers from 1 to N
function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumToN(5)); // 15

// Q2. Sum of Odd Numbers from 1 to N
function sumOdd(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}
console.log(sumOdd(10)); // 25

// Q3. Count Digits in a Number
function countDigits(num) {
  let count = 0;
  while (num != 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
console.log(countDigits(12345)); // 5

// Q4. Sum of Array Elements
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4])); // 10

// Q5. Find Minimum in Array
function findMin(arr) {
  let min = arr[0];
  for (let num of arr) {
    if (num < min) min = num;
  }
  return min;
}
console.log(findMin([5, 2, 9, 1])); // 1

// Q6. Sum of Even Numbers in Array
function sumEven(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 === 0) sum += num;
  }
  return sum;
}
console.log(sumEven([1, 2, 3, 4, 5, 6])); // 12

// Q7. Print Multiplication Table
function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
multiplicationTable(5);

// Q8. Count Words in String
function countWords(str) {
  return str.trim().split(/\s+/).length;
}
console.log(countWords("Hello world from JavaScript")); // 5
