
const cats = ['Pilkis', 'Murka', 'Pūkis', 'Ilgauodegis', 'Pifas', 'Keris', 'Džimas', 'Džeris'];

const data = cats.map( (e, i) => ({id: i + 1, name: e}));
console.log(data)

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// const data1 = data.sort( (a, b) => {
//     if (a.name > b.name) return 1;
//     if (a.name < b.name) return -1;
//     return 0;
// });
// const data2 = data.sort( (a, b) => a.name == b.name ? 0 : a.name > b.name ? 1 : -1 )
// console.log(data2)


const number = rand(1, 8);
console.log (number);

// const data3 = data.filter( e => e.id !== number);
// console.log(data3)

// const data4 = data.filter( e => e.id === number)[0];
// console.log (data4);

// const data5 = data.sort(_ => Math.random() - 0.5);
// const data5 = data.sort(_ => rand(0, 1) ? 1 : -1);

// const data6 = data.filter(c => !(c.id % 2)).sort(_ => rand(0, 1) ? 1 : -1);
// const data7 = data.map( e => !(e.id % 2) ? data6.shift() : e);

// console.log(data6)
// console.log(data7)

const data8 = data.map( e => {
    e.weight = rand(1, 7)
    return e
});
console.log(data, data8)

const mod = data.map(c => ({...c, weight: rand(1, 7)}))
console.log(mod)

const data9 = data.map( e => {
    e.weight = rand(1, 7)
    e[e.name] = 42
    return e
});
console.log(data8)

const mod1 = data.map(c => ({...c, weight: rand(1, 7), [c.name]:42}))
console.log(mod1)
const mod2 = data.map(c => ({...c, weight: rand(1, 7), [c.name]:42, ['have-fun']: true}))
console.log(mod2)