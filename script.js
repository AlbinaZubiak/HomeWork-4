// Зданаие 1 
let i = 0;
while (i < 2) {
    console.log('Привет');
    i++;
}
// Задание 2 
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Задание 3 
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

//Задание 4 
let obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
};

for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов.`);
}
//Задание 5 
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(n)
console.log(num)

//Задание 6 

let firstFriday = 3;
for (let friday = firstFriday; friday <= 28; friday += 7) {
    console.log(`6: It's friday the ${friday}st, so it's time to do a report.`);
}