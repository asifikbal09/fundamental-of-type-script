"use strict";
//There are 2 types of function
// 1. Normal function
//2. Arrow function
//Normal Function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
//Arrow Function
const sum = (num3, num4) => num3 + num4;
sum(2, 2);
//Object -->Function --> Method
const poorUser = {
    name: "Asif Ikbal",
    balance: 0,
    addBalance(balance) {
        return `My balance is ${this.balance + balance}`;
    },
};
