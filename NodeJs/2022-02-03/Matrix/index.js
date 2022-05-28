import chalk from 'chalk';

import readline from 'readline'


const reading = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// console.log(process.stdout.columns);
// const string = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
// const matrix = () => {


// let rezultatas = ''

// for(let i = 0; i < process.stdout.columns * 3; i++){
//     if(i % random(1, 8) == 0){
//         rezultatas += ' '
//     } else {
//     rezultatas += string[random(0, 93)]
//     }
// } 
// console.log(chalk.greenBright(rezultatas))

// setTimeout(matrix, 100)
// }

// matrix()

// let rezultatas = ''
// for(let i = 0; i < process.stdout.columns * 3; i++){
//     rezultatas += '*'
// }
// console.log(chalk.yellow(rezultatas))
// console.log(chalk.green(rezultatas))
// console.log(chalk.red(rezultatas))
// const duomenys = {
//     name: 'Jonas',
//     pass: 'jonukas12'
// }

// reading.question('Iveskite savo varda: ', vardas => {
//         reading.question('Iveskite savo slaptazodi: ', slaptazodis => {
//             if (vardas == duomenys.name && slaptazodis === duomenys.pass) console.log(chalk.green('Duomenys teisingi'))
//             else console.log(chalk.red('Vardas neegzistuoja'))
//             reading.close()
//         })
//     })
console.log(process.stdout.columns)