// 1.первая задача
for (let num = 1; num <= 10; num++) {
for (let i = 1; i <= 10; i++) {
console.log(`${num} x ${i} = ${num * i}`);
}
console.log(""); 
}

// 2.второе задание
let dlina = 12;

let simvoly = [
  ..."abcdefghijklmnopqrstuvwxyz",
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ..."0123456789"
];

console.log("Массив возможных символов:");
console.log(simvoly);
console.log("");

let vybrannye = [];

for (let i = 0; i < dlina; i++) {
let sluchaynyIndex = Math.floor(Math.random() * simvoly.length);
let simvol = simvoly[sluchaynyIndex];
vybrannye.push(simvol);
console.log(`Символ ${i + 1}: ${simvol}`);
}

let parol = vybrannye.join("");

console.log("");
console.log("Массив выбранных символов:");
console.log(vybrannye);

console.log("");
console.log("Сгенерированный пароль:");
console.log(parol);






























