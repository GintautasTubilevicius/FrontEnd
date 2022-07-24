
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log('start', rand(1, 1000));

// const arr = Array(10).fill().map(() => rand(10, 99));
// console.log(arr);

const arr1 = [...Array(10)].map(e => rand(10, 99));
console.log(arr1);

// let arr2 = new Array(10)
// arr2 = arr2.fill(0).map(() => rand(10, 99));
// console.log(arr2)

// const mas = [];
// for ( let i = 0; i < 10; i++) {
//     mas.push(rand(10, 99))
// }
// console.table(mas)

// const surusiuoti = arr1.sort( (a, b) => b - a);
// console.log(surusiuoti);

// arr1.forEach( e => console.log(e))

// const arrFt = arr1.filter( e => e <= 50);
// console.log(arrFt)

const uzdavinys = arr1.filter( e => e > 66).map( e => e * 3).sort( (a, b) => a % 2 - b % 2 || a - b )
console.log(uzdavinys)
