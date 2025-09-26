// 📝 JavaScript Practice Questions
// Q1. Reverse a string
// Q2. Count vowels
// Q3. Find factorial
// Q4. Fibonacci sequence
// Q5. Check palindrome

// 1️⃣ Reverse a string
const reverse = (str) => {
  return str.split("").reverse().join("");
};

console.log("Reverse:", reverse("Hello")); // Output: olleH

// 2️⃣ Count vowels
const countVowels = (str) => {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
};

console.log("Vowels Count:", countVowels("Hello World")); // Output: 3

// 3️⃣ Find factorial
const factorial = (num) => {
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact *= i;
  }

  return fact;
};

console.log("Factorial:", factorial(5)); // Output: 120

// 4️⃣ Fibonacci sequence
const fibonacci = (num) => {
  let num1 = 0,
    num2 = 1,
    sum;

  if (num === 1) return num1;
  if (num === 2) return num2;

  for (let i = 3; i <= num; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }

  return num2;
};

console.log("Fibonacci(5):", fibonacci(5)); // Output: 3

// 5️⃣ Check palindrome
const isPalindrome = (str) => {
  const lowerStr = str.toLowerCase();
  const reversedStr = lowerStr.split("").reverse().join("");

  return lowerStr === reversedStr
    ? `${str} is a palindrome.`
    : `${str} is not a palindrome.`;
};

console.log("Palindrome:", isPalindrome("madam")); // Output: madam is a palindrome.
