// Part 1 - Syntax & Case Sensitivity

console.log("Hello JavaScript");

let test = 10;
console.log("Test");


// Part 2 - Variables

let studentName = "Harsh";
let rollNumber = 101;
let course = "BSc IT";

console.log(studentName, rollNumber, course);


// Task 2.2 - const

const collegeName = "Dev Sanskriti Vishwavidyalaya";
console.log(collegeName);


// Task 2.3 - Naming Practice
// 1stYear - Invalid
// student_name - Valid
// let - Invalid
// $marks - Valid
// roll no - Invalid


// Task 2.4 - Scope

if (true) {
    var a = "I am var";
    let b = "I am let";
}

console.log(a);
// console.log(b); // Uncomment to see ReferenceError


// Part 3 - Data Types

let name = "Harsh";
let age = 20;
let isStudent = true;
let result;
let value = null;
let bigNumber = 12345678901234567890n;
let id = Symbol("studentID");

console.log(name, typeof name);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);
console.log(result, typeof result);
console.log(value, typeof value);
console.log(bigNumber, typeof bigNumber);
console.log(id, typeof id);


// Task 3.2 - Object

const student = {
    name: "Rohit",
    rollNo: 21,
    course: "BCA",
    isPassing: true
};

console.log(student.name);
console.log(student.isPassing);


// Array

const subjects = [
    "JavaScript",
    "DBMS",
    "Networking",
    "Operating System"
];

console.log(subjects[0], subjects[2]);
console.log(subjects[3]);


// Task 3.3

console.log(typeof null);


// Part 4 - Operators

let num1 = 20;
let num2 = 6;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);