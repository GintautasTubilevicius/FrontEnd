import express from 'express'
import { Items } from './database/connection.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import session from 'express-session'


const app = express()

app.use( express.json() )

//Sesijos priskyrimas prie express objekto
app.use(session({
    secret: 'Xc8BWMjxR5u2hyJaQ2R7UCUXAJeB4jKrXF722RXuumjZEfcD7AHuhCmEYgfCMeQ67J3Tqtumd6Nzf4ZKU9BJ3j9a4TLvFT2KmKrcaBTbdsYVWSYjXd54PRASMxfaX7Zz',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 864000000
    }
}))

//Express konfiguracijos prapletimas norint priimti POST metodu perduodamus duomenis
app.use(express.urlencoded({
    extended: false
}))

//Teisingi prisijungimo duomenys
const credentials = {
    login: 'admin@bit.lt',
    password: '1234'
}

const __dirname = dirname( fileURLToPath(import.meta.url) )


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html')
})


app.post('/new', async (req, res) => {
    try {
        await Items.create(req.body)
        res.status(200).end()
    } catch {
         res.sendStatus(500)
    }
})


app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/templates/login.html')
})


app.post('/authenticate', (req, res) => {
    if(parseInt(Object.keys(req.body).length) > 0) {
        if(
            req.body.email != '' &&
            req.body.password != '' &&
            req.body.email === credentials.login &&
            req.body.password === credentials.password
        ) {
            req.session.loggedin = true
            res.sendStatus(200)
            return
        } else {  
            res.sendStatus(401)
        }
    } else {
    res.sendStatus(202)
    }
})

app.get('/admin', (req, res) => {
    if(req.session.loggedin) {
        res.sendFile(__dirname + '/templates/admin.html')
    } else {
        res.sendFile(__dirname + '/templates/login.html')
    }
})

app.get('/all', async (req, res) => {
    try {
        const ordersList = await Items.find()
        res.status(200).json(ordersList)
    } catch {
        res.sendStatus(500)
    }
})

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
    if(req.session.loggedin) {
        await Items.findByIdAndDelete(id)
        res.sendStatus(200)
    } else {    
        res.sendStatus(500)
    }
})  

app.put('/update/:id', async (req, res) => {
    const id = req.params.id
    try {
        await Items.findByIdAndUpdate(id, req.body)
        res.sendStatus(200)
    } catch {
        res.sendStatus(500)
    }
})  


app.listen(3000)