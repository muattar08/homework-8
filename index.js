// 1.первая задача
let num1 = 1;
for (let i = 1; i <= 10; i++) {
console.log(`${num1} x ${i} = ${num1 * i}`);
}

console.log("");

let num2 = 2;
for (let i = 1; i <= 10; i++) {
console.log(`${num2} x ${i} = ${num2 * i}`);
}

console.log("");

let num3 = 3;
for (let i = 1; i <= 10; i++) {
console.log(`${num3} x ${i} = ${num3 * i}`);
}

console.log("");

let num4 = 4;
for (let i = 1; i <= 10; i++) {
console.log(`${num4} x ${i} = ${num4 * i}`);
}

console.log("");

let num5 = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num5} x ${i} = ${num5 * i}`);
}

console.log("");

let num6 = 6;
for (let i = 1; i <= 10; i++) {
console.log(`${num6} x ${i} = ${num6 * i}`);
}

console.log("");

let num7 = 7;
for (let i = 1; i <= 10; i++) {
console.log(`${num7} x ${i} = ${num7 * i}`);
}

console.log("");

let num8 = 8;
for (let i = 1; i <= 10; i++) {
console.log(`${num8} x ${i} = ${num8 * i}`);
}

console.log("");

let num9 = 9;
for (let i = 1; i <= 10; i++) {
console.log(`${num9} x ${i} = ${num9 * i}`);
}

console.log("");

let num10 = 10;
for (let i = 1; i <= 10; i++) {
console.log(`${num10} x ${i} = ${num10 * i}`);
}


// 2.второе задание
let length = prompt("Сколько символов хотите в пароле?");

let bukvyICifry = [
  ..."abcdefghijklmnopqrstuvwxyz",
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ..."0123456789"
];

let password = "";

for (let i = 0; i < length; i++) {
  let sluchaynoeChislo = Math.random();

  if (sluchaynoeChislo < 0.33) {
    password += bukvyICifry[Math.floor(Math.random() * 26)];
  } else if (sluchaynoeChislo < 0.66) {
    password += bukvyICifry[26 + Math.floor(Math.random() * 26)];
  } else {
    password += bukvyICifry[52 + Math.floor(Math.random() * 10)];
  }
}

alert("Ваш пароль: " + password);































