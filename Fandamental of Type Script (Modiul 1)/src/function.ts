//There are 2 types of function
// 1. Normal function
//2. Arrow function

//Normal Function
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 2);

//Arrow Function
const sum = (num3: number, num4: number): number => num3 + num4;

sum(2, 2);

//Object -->Function --> Method

const poorUser = {
  name: "Asif Ikbal",
  balance: 0,
  addBalance(balance: number): string {
    return `My balance is ${this.balance + balance}`;
  },
};
