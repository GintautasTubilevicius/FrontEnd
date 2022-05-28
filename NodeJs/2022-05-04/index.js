import {readFile, appendFile, writeFile} from 'fs/promises'




// const hello = await readFile('hello.txt', 'utf8')

// console.log(hello)

// await appendFile('hello.txt', '\nPapildytas tekstas', 'utf8')

// Informacijos talpinimas database.json faile

//JSON.parse() Stringo konvertavimas i masyva arba objekta
//JSON.stringify() Masyvo arba objekto konvertavimas i JSON stringa

// let masyvas = []

// const objektas = {
//     vardas: "Gintas",
//     pavarde: "Jonaitis",
//     adresas: "Kaunas",
//     telefonas: "234566"
// }
// try {
//     await writeFile('database.json', jsonString, 'utf8')
//     if(database === ''){
//         masyvas.push(objektas)
//     } else {
//         masyvas = JSON.parse(database)
//         masyvas.push(objektas)
//     }
//     let jsonString = JSON.stringify(masyvas)
//     await writeFile('database.json', jsonString, 'utf8')
//     console.log('Duomenys sekmingai issaugoti database.json faile')
// } catch {
//     console.log('Duomenu isaugot nepavyko')
// }
// const random = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// async function skaitymas (failas) {
//     let masyvas = Array(100).fill(1).map(() => random(1, 49))

// try {
//     let jsonString = JSON.stringify(masyvas)
//     await writeFile(failas, jsonString, 'utf8')
//     console.log('Issaugota')

//     let masyvasIkeltas = await readFile(failas, 'utf8')
//     let list1 = JSON.parse(masyvasIkeltas)
//     console.log(masyvasIkeltas)
//     let list = list1.filter((el, i, array) => array.indexOf(el) === i).sort(function(a, b){return a - b})
//     console.log(list)
//     let jsonStringModifikuotas = JSON.stringify(list)
//     await writeFile(failas, jsonStringModifikuotas, 'utf8')
//     console.log('Issaugota ir modifikuota')


// } catch(error) {
//     console.log(error)
//     console.log('Issaugot nepavyko')
// }

// }
// skaitymas('database.json');

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const masyvoTalpinimas = async (failas) => {
    try {
        let masyvas = new Array(100)
        masyvas = masyvas.fill(1).map((el) => random(1, 49))
        await writeFile(failas, JSON.stringify(masyvas, 'utf8'))
        const database =  await readFile(failas, 'utf8')
        masyvas = JSON.parse(database)
        masyvas = masyvas.filter((value, index, array) => array.indexOf(value) === index)
        masyvas.sort((a,b) => a - b)
        await writeFile(failas, JSON.stringify(masyvas, 'utf8'))
    } catch {
        return false
}
return true
}
masyvoTalpinimas('database.json')    
.then(resp => {
    console.log(resp)
})
.catch(rejected => {
    console.log(rejected)
})








