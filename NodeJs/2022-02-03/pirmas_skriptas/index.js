console.log('Labas Pasauli')
console.log('------1 uzduotis-------')
const name = 'Chuck';
const lastname = 'Norris';
const letters = name.charAt(0) + lastname.charAt(0)
console.log(`Vardo ${name} ir Pavardes ${lastname} pirmos raides yra`, letters)

console.log('------2 uzduotis-------')

let array = []
const skaiciai = (x) => {
    for (let i = 1; i <= 3000; i++) {
        if (i % 77 === 0) array.push(i)
    }
    console.log(array.toString())
}
skaiciai()

console.log('------3 uzduotis-------')

const lettersForArray = ['A', 'B', 'C', 'D'];
const randomLettersArray = [...Array(200)].map(_ => lettersForArray[Math.floor(Math.random() * lettersForArray.length)]);
// console.log(`${randomLettersArray}`);
const lettersCount = randomLettersArray.reduce((letter, val) => {
    letter[val] = letter[val] === undefined ? 1 : letter[val] += 1;
    return letter;
  }, {});
  console.log(lettersCount);