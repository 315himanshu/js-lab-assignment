// Part 1 - if statement

// Task 1.1
let marks1 = 50;
if (marks1 >= 40) {
    console.log("Task 1.1: You passed!");
}
marks1 = 30;
if (marks1 >= 40) {
    console.log("Task 1.1: You passed!");
}


// Task 1.2
let age1 = 10;
if (age1 >= 18) {
    console.log("Task 1.2: You can watch this movie");
}
age1 = 15;
if (age1 >= 18) {
    console.log("Task 1.2: You can watch this movie");
}
age1 = 20;
if (age1 >= 18) {
    console.log("Task 1.2: You can watch this movie");
}


// Part 2 - if-else

// Task 2.1
let number1 = 7;
if (number1 % 2 === 0) {
    console.log("Task 2.1: Even number");
} else {
    console.log("Task 2.1: Odd number");
}
number1 = 10;
if (number1 % 2 === 0) {
    console.log("Task 2.1: Even number");
} else {
    console.log("Task 2.1: Odd number");
}
number1 = 15;
if (number1 % 2 === 0) {
    console.log("Task 2.1: Even number");
} else {
    console.log("Task 2.1: Odd number");
}


// Task 2.2
let correctPIN1 = 1234;
let guessPIN1 = 1234;

if (guessPIN1 === correctPIN1) {
    console.log("Task 2.2: Access Granted");
} else {
    console.log("Task 2.2: Access Denied");
}

guessPIN1 = 5678;

if (guessPIN1 === correctPIN1) {
    console.log("Task 2.2: Access Granted");
} else {
    console.log("Task 2.2: Access Denied");
}


// Task 2.3
let marks2 = 45;

if (marks2 >= 40) {
    console.log("Task 2.3: Pass");
} else {
    console.log("Task 2.3: Fail");
}

console.log("Task 2.3: I like if-else better because it is easy to understand.");


// Part 3 - if-else-if

// Task 3.1
let age2 = 3;

if (age2 < 5) {
    console.log("Task 3.1: Free");
} else if (age2 < 12) {
    console.log("Task 3.1: Rs. 100");
} else if (age2 < 60) {
    console.log("Task 3.1: Rs. 250");
} else {
    console.log("Task 3.1: Rs. 150");
}

age2 = 8;

if (age2 < 5) {
    console.log("Task 3.1: Free");
} else if (age2 < 12) {
    console.log("Task 3.1: Rs. 100");
} else if (age2 < 60) {
    console.log("Task 3.1: Rs. 250");
} else {
    console.log("Task 3.1: Rs. 150");
}

age2 = 18;

if (age2 < 5) {
    console.log("Task 3.1: Free");
} else if (age2 < 12) {
    console.log("Task 3.1: Rs. 100");
} else if (age2 < 60) {
    console.log("Task 3.1: Rs. 250");
} else {
    console.log("Task 3.1: Rs. 150");
}

age2 = 45;

if (age2 < 5) {
    console.log("Task 3.1: Free");
} else if (age2 < 12) {
    console.log("Task 3.1: Rs. 100");
} else if (age2 < 60) {
    console.log("Task 3.1: Rs. 250");
} else {
    console.log("Task 3.1: Rs. 150");
}

age2 = 65;

if (age2 < 5) {
    console.log("Task 3.1: Free");
} else if (age2 < 12) {
    console.log("Task 3.1: Rs. 100");
} else if (age2 < 60) {
    console.log("Task 3.1: Rs. 250");
} else {
    console.log("Task 3.1: Rs. 150");
}


// Task 3.2
let temperature1 = 40;

if (temperature1 > 35) {
    console.log("Task 3.2: It's hot! Drink water.");
} else if (temperature1 > 20) {
    console.log("Task 3.2: Nice weather!");
} else if (temperature1 > 10) {
    console.log("Task 3.2: A bit cold. Wear a jacket.");
} else {
    console.log("Task 3.2: Very cold! Stay warm.");
}

temperature1 = 25;

if (temperature1 > 35) {
    console.log("Task 3.2: It's hot! Drink water.");
} else if (temperature1 > 20) {
    console.log("Task 3.2: Nice weather!");
} else if (temperature1 > 10) {
    console.log("Task 3.2: A bit cold. Wear a jacket.");
} else {
    console.log("Task 3.2: Very cold! Stay warm.");
}

temperature1 = 15;

if (temperature1 > 35) {
    console.log("Task 3.2: It's hot! Drink water.");
} else if (temperature1 > 20) {
    console.log("Task 3.2: Nice weather!");
} else if (temperature1 > 10) {
    console.log("Task 3.2: A bit cold. Wear a jacket.");
} else {
    console.log("Task 3.2: Very cold! Stay warm.");
}

temperature1 = 5;

if (temperature1 > 35) {
    console.log("Task 3.2: It's hot! Drink water.");
} else if (temperature1 > 20) {
    console.log("Task 3.2: Nice weather!");
} else if (temperature1 > 10) {
    console.log("Task 3.2: A bit cold. Wear a jacket.");
} else {
    console.log("Task 3.2: Very cold! Stay warm.");
}


// Part 4 - switch-case

// Task 4.1
let day1 = 3;

switch (day1) {
    case 1:
        console.log("Task 4.1: Monday");
        break;
    case 2:
        console.log("Task 4.1: Tuesday");
        break;
    case 3:
        console.log("Task 4.1: Wednesday");
        break;
    case 4:
        console.log("Task 4.1: Thursday");
        break;
    case 5:
        console.log("Task 4.1: Friday");
        break;
    case 6:
        console.log("Task 4.1: Saturday");
        break;
    case 7:
        console.log("Task 4.1: Sunday");
        break;
    default:
        console.log("Task 4.1: Invalid day");
}


// Task 4.2
let mood1 = "happy";

switch (mood1) {
    case "happy":
        console.log("Task 4.2: You are happy!");
        break;
    case "sad":
        console.log("Task 4.2: Cheer up!");
        break;
    case "angry":
        console.log("Task 4.2: Take a deep breath!");
        break;
    case "tired":
        console.log("Task 4.2: Take some rest!");
        break;
    default:
        console.log("Task 4.2: Unknown mood");
}


// Task 4.3
let day2 = 3;

switch (day2) {
    case 1:
        console.log("Task 4.3: Monday");
        break;
    case 2:
        console.log("Task 4.3: Tuesday");
        break;
    case 3:
        console.log("Task 4.3: Wednesday");
        break;
    case 4:
        console.log("Task 4.3: Thursday");
        break;
    case 5:
        console.log("Task 4.3: Friday");
        break;
    case 6:
        console.log("Task 4.3: Saturday");
        break;
    case 7:
        console.log("Task 4.3: Sunday");
        break;
    default:
        console.log("Task 4.3: Invalid day");
}


// Part 5 - Mini Project: ATM Machine

// Test 1 - Wrong PIN
let correctPIN2 = 1234;
let enteredPIN2 = 9999;
let balance1 = 5000;
let choice1 = 1;

if (enteredPIN2 === correctPIN2) {
    switch (choice1) {
        case 1:
            console.log("ATM Test 1: Balance = Rs. " + balance1);
            break;

        case 2:
            let withdrawAmount1 = 7000;

            if (withdrawAmount1 > balance1) {
                console.log("ATM Test 1: Insufficient funds");
            } else {
                balance1 = balance1 - withdrawAmount1;
                console.log("ATM Test 1: New Balance = Rs. " + balance1);
            }
            break;

        case 3:
            let depositAmount1 = 2000;
            balance1 = balance1 + depositAmount1;
            console.log("ATM Test 1: New Balance = Rs. " + balance1);
            break;

        default:
            console.log("ATM Test 1: Invalid choice");
    }
} else {
    console.log("ATM Test 1: Wrong PIN. Access Denied.");
}


// Test 2 - Correct PIN + insufficient funds
let correctPIN3 = 1234;
let enteredPIN3 = 1234;
let balance2 = 5000;
let choice2 = 2;

if (enteredPIN3 === correctPIN3) {
    switch (choice2) {
        case 1:
            console.log("ATM Test 2: Balance = Rs. " + balance2);
            break;

        case 2:
            let withdrawAmount2 = 7000;

            if (withdrawAmount2 > balance2) {
                console.log("ATM Test 2: Insufficient funds");
            } else {
                balance2 = balance2 - withdrawAmount2;
                console.log("ATM Test 2: New Balance = Rs. " + balance2);
            }
            break;

        case 3:
            let depositAmount2 = 2000;
            balance2 = balance2 + depositAmount2;
            console.log("ATM Test 2: New Balance = Rs. " + balance2);
            break;

        default:
            console.log("ATM Test 2: Invalid choice");
    }
} else {
    console.log("ATM Test 2: Wrong PIN. Access Denied.");
}


// Test 3 - Correct PIN + successful deposit
let correctPIN4 = 1234;
let enteredPIN4 = 1234;
let balance3 = 5000;
let choice3 = 3;

if (enteredPIN4 === correctPIN4) {
    switch (choice3) {
        case 1:
            console.log("ATM Test 3: Balance = Rs. " + balance3);
            break;

        case 2:
            let withdrawAmount3 = 1000;

            if (withdrawAmount3 > balance3) {
                console.log("ATM Test 3: Insufficient funds");
            } else {
                balance3 = balance3 - withdrawAmount3;
                console.log("ATM Test 3: New Balance = Rs. " + balance3);
            }
            break;

        case 3:
            let depositAmount3 = 2000;
            balance3 = balance3 + depositAmount3;
            console.log("ATM Test 3: New Balance = Rs. " + balance3);
            break;

        default:
            console.log("ATM Test 3: Invalid choice");
    }
} else {
    console.log("ATM Test 3: Wrong PIN. Access Denied.");
}


// Part 6 - Debugging Challenge

// Snippet 1 - Fixed
let age3 = 15;

if (age3 === 18) {
    console.log("Snippet 1: Adult");
} else {
    console.log("Snippet 1: Minor");
}


// Snippet 2 - Fixed
let fruit1 = "apple";

switch (fruit1) {
    case "apple":
        console.log("Snippet 2: Red fruit");
        break;

    case "banana":
        console.log("Snippet 2: Yellow fruit");
        break;

    default:
        console.log("Snippet 2: Unknown fruit");
}


// Snippet 3 - Fixed
let choice4 = "2";

switch (choice4) {
    case "1":
        console.log("Snippet 3: One");
        break;

    case "2":
        console.log("Snippet 3: Two");
        break;

    default:
        console.log("Snippet 3: Invalid");
}