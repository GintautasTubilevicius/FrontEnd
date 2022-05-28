import express from 'express'
import {engine} from 'express-handlebars'
import session from 'express-session'
import {readFile, appendFile, writeFile} from 'fs/promises'

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './templates')

//Sesijos priskyrimas prie express objekto
app.use(session({
    secret: 'rzq67Er7mkPvPCGc',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 86400000
    }
}))

//Express konfiguracijos prapletimas norint priimti POST metodu
app.use(express.urlencoded({
    extended: false
}))

//Mano variantas

// app.get('/zmones/:pavarde', (req, res) => {
//     const masyvas = ['Jonas', 'Petras', 'Rasa', 'Lina', 'Karolis', 'Laura', 'Zigmas', 'Kristina', 'Gabija', 'Marija']
//     const vardas = masyvas[Math.floor(Math.random()*masyvas.length)]
//     const pavarde = req.params.pavarde
       
//      res.send(`<h1> ${vardas} ${pavarde} </h1>`)
// })

//Destytojo variantas

const random = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// app.get('/zmones/:pavarde', async (req, res) => {
//     const vardai = ['Jonas', 'Petras', 'Rasa', 'Lina', 'Karolis', 'Laura', 'Zigmas', 'Kristina', 'Gabija', 'Marija']
//     const pavarde = req.params.pavarde
//     const zmogus = vardai[random(0, vardai.length - 1)] + ' ' + pavarde
//     try {
//         await readFile('vardai.txt', 'utf8')
//         await appendFile('vardai.txt','\n' + zmogus, 'utf8')
//         res.send(zmogus + ' sėkmingai išsaugotas faile')
//     } catch {
//         res.send('Įvyko klaida')
//     }
// })

app.get('/zmones/:pavarde', async (req, res) => {
    const vardai = ['Jonas', 'Petras', 'Rasa', 'Lina', 'Karolis', 'Laura', 'Zigmas', 'Kristina', 'Gabija', 'Marija']
    const pavarde = req.params.pavarde
    const zmogus = vardai[random(0, vardai.length - 1)] + ' ' + pavarde
    
       
        try {
 
        
            



            const duomenys = await readFile('database.json', 'utf8')
            console.log(duomenys)
            const masyvas = JSON.parse(duomenys)
            console.log(masyvasNuskaitytas)
            masyvas.push(zmogus)
            await writeFile('database.json', JSON.stringify(masyvas), 'utf8')
            console.log('Issaugota ir modifikuota')
            res.send(zmogus + ' sėkmingai išsaugotas faile')
        
        } catch {
            res.send(zmogus + ' neišsaugotas faile')
        }

})


app.listen(3000)