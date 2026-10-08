// PART 0 - QUICK RECAP

console.log("----- PART 0 -----");

console.log(typeof (10 + "5"));
console.log(5 === "5");

let x = 10;
x += 5;
console.log(x);

console.log(true && false || true);
console.log(10 % 3);


// PART 1 - OPERATOR PRECEDENCE

console.log("----- PART 1 -----");

let val = 4 + 3 * 2 ** 2 - 6 / 3;

console.log("Task 1.1:", val);

console.log("Task 1.2:");

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

let expression = 5 + 3 * 2 > 10 && 20 - 5 === 15;

console.log("Task 1.3:", expression);


// PART 2 - NESTED TERNARY

console.log("----- PART 2 -----");

let age = 25;

let ticketPrice = age < 5
    ? "Free"
    : age < 12
        ? "₹100"
        : age < 60
            ? "₹250"
            : "₹150";

console.log("Task 2.1:", ticketPrice);


let cartTotal = 1500;

let shippingCost = cartTotal >= 2000
    ? "Free Shipping"
    : cartTotal >= 1000
        ? "₹50"
        : "₹100";

console.log("Task 2.2:", shippingCost);


let isMember = true;
let totalSpent = 6000;

let discountType = isMember && totalSpent >= 5000
    ? "VIP Discount"
    : totalSpent >= 5000
        ? "Regular Discount"
        : "No Discount";

console.log("Task 2.3:", discountType);


// PART 3 - ARRAYS AND OBJECTS

console.log("----- PART 3 -----");

const scores = [70, 80, 65, 90, 75];

const sum = scores[0] + scores[1] + scores[2] + scores[3] + scores[4];

const average = sum / scores.length;

const result = average >= 40 ? "Pass" : "Fail";

console.log("Sum:", sum);
console.log("Average:", average);
console.log("Result:", result);


const item1 = {
    name: "Notebook",
    price: 60,
    qty: 3
};

const item2 = {
    name: "Pen",
    price: 10,
    qty: 5
};

const item3 = {
    name: "Bag",
    price: 800,
    qty: 1
};

const item4 = {
    name: "Bottle",
    price: 300,
    qty: 2
};

const subtotal1 = item1.price * item1.qty;
const subtotal2 = item2.price * item2.qty;
const subtotal3 = item3.price * item3.qty;
const subtotal4 = item4.price * item4.qty;

const grandTotal = subtotal1 + subtotal2 + subtotal3 + subtotal4;

console.log("Subtotal 1:", subtotal1);
console.log("Subtotal 2:", subtotal2);
console.log("Subtotal 3:", subtotal3);
console.log("Subtotal 4:", subtotal4);
console.log("Grand Total:", grandTotal);


// PART 4 - TYPE COERCION

console.log("----- PART 4 -----");

console.log('"5" + 3 =', "5" + 3);
console.log('"5" - 3 =', "5" - 3);
console.log('"abc" * 2 =', "abc" * 2);
console.log("NaN === NaN =", NaN === NaN);
console.log("[] == false =", [] == false);
console.log('"10" == 10 =', "10" == 10);
console.log("null + 1 =", null + 1);

console.log("typeof NaN =", typeof NaN);


// PART 5 - SMART SHOPPING CART AND BILLING SYSTEM

console.log("----- PART 5 -----");

const product1 = {
    name: "Notebook",
    price: 60,
    qty: 3
};

const product2 = {
    name: "Pen",
    price: 10,
    qty: 5
};

const product3 = {
    name: "Bag",
    price: 800,
    qty: 1
};


// TYPE CHECK

console.log("Product 1 Price Type:", typeof product1.price);
console.log("Product 2 Price Type:", typeof product2.price);
console.log("Product 3 Price Type:", typeof product3.price);


// SUBTOTALS

const productSubtotal1 = product1.price * product1.qty;
const productSubtotal2 = product2.price * product2.qty;
const productSubtotal3 = product3.price * product3.qty;


// GRAND TOTAL

const total = productSubtotal1 + productSubtotal2 + productSubtotal3;


// DISCOUNT

const discountPercent = total >= 5000
    ? 20
    : total >= 2000
        ? 10
        : total >= 1000
            ? 5
            : 0;

const discountAmount = total * discountPercent / 100;

const amountAfterDiscount = total - discountAmount;


// GST

const gst = amountAfterDiscount * 18 / 100;

const finalPayable = amountAfterDiscount + gst;


// FREE SHIPPING

const freeShipping = amountAfterDiscount >= 1500 || 3 >= 3;

const shippingStatus = freeShipping
    ? "FREE"
    : "₹100 shipping charge";


// RECEIPT

console.log("----- RECEIPT -----");

console.log(product1.name + " - ₹" + productSubtotal1);
console.log(product2.name + " - ₹" + productSubtotal2);
console.log(product3.name + " - ₹" + productSubtotal3);

console.log("Grand Total: ₹" + total);

console.log("Discount: " + discountPercent + "%");

console.log("Discount Amount: ₹" + discountAmount.toFixed(2));

console.log("Amount After Discount: ₹" + amountAfterDiscount.toFixed(2));

console.log("GST: ₹" + gst.toFixed(2));

console.log("Final Payable: ₹" + finalPayable.toFixed(2));

console.log("Shipping: " + shippingStatus);


// BONUS - LOYALTY POINTS

const loyaltyPoints = finalPayable / 100;

console.log("Loyalty Points:", loyaltyPoints);


// PART 6 - DEBUGGING CHALLENGE

console.log("----- PART 6 -----");


// SNIPPET 1

let price = 500;

let discount = price * 0.1;

discount = discount + 5;

console.log("Final:", discount);


// SNIPPET 2

let marks = "85";

let passResult = marks === "85"
    ? "Pass"
    : "Fail";

console.log("Result:", passResult);


// SNIPPET 3

const originalCartTotal = 1200;

let newCartTotal = originalCartTotal - 100;

let shippingResult = newCartTotal >= 1500
    ? "Free"
    : "Paid";

console.log("Shipping:", shippingResult);