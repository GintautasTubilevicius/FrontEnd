import readline from 'readline'


const reading = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// reading.question('Iveskite savo varda: ', (vardas) =>{
//     console.log('Jusu vardas yra: ' + vardas)
//     reading.close()
// })

// reading.question('Iveskite skaiciu nuo 1 iki 10: ', (digit) => {
//     if (digit > 0 && digit <=10) {
//         for(let i = 1; i <=10; i++) {
//             console.log(`${digit} x ${i} = ${digit * i}`)
//         }
//     } else {
//         console.log('Ivestas neteisingas skaicius')
//     }
        // reading.close()
// })

// reading.question('Iveskite savo varda: ', vardas => {
//     reading.question('Iveskite savo pavarde: ', pavarde => {
//         console.log(`Sveiki, ${vardas} ${pavarde}`)
//         reading.close()
//     })
// })

reading.question('Iveskite kg nuo: ', nuo => {
    reading.question('Iveskite kg iki: ', iki => {
        console.log(`kg  pound  stone`)
        for( let i = nuo; i <= iki; i++){
            console.log(`${i}   ${(i * 2.20462).toFixed(2)}   ${(i * 0.157473).toFixed(2)}`)
        }
        reading.close()
    })
})





