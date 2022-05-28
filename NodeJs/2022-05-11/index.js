import express from 'express'
import {engine} from 'express-handlebars'
import session from 'express-session'
import {readFile, writeFile} from 'fs/promises'

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

//Teisingi prisijungimo duomenys
const credentials = {
    login: 'admin@bit.lt',
    password: 'labas1234',
    name: 'Jonas Jonaitis'
}

const file = './db/database.json'

app.get('/', (req, res) => {
    let returned = {}

    if(parseInt(Object.keys(req.query).length) > 0) {
        if(
            req.query.email != '' &&
            req.query.password != '' &&
            req.query.email === credentials.login &&
            req.query.password === credentials.password
        ) {
            req.session.loggedin = true
            req.session.user = credentials.name
            res.redirect('/account')
            return
        } else {  
            returned = {message: 'Neteisingi prisijungimo duomenys', status: 'danger'}
        }
    }
        
    res.render('login', {layout: 'login', title: 'Banko aplikacija', returned})
})

app.get('/account', (req, res) => {
    // if(!req.session.loggedin){
    //     res.redirect('/')
    //     return
    // }
    
    const data = {
        message: req.query.message,
        status: req.query.status,
        user: req.session.user
    }
    res.render('account', data)
})

app.post('/approve-transfer', async (req, res) => {


    if(
        req.body?.account_number != '' &&
        req.body?.recipient != '' &&
        req.body?.amount != ''
    ) {
        try {
        const db = await readFile(file, 'utf8')
        let database = JSON.parse(db)
        database.push(req.body)
        
        const id = database.length - 1
        await writeFile(file, JSON.stringify(database), 'utf8')
        res.render('approve-transfer', {data: req.body, id})

        } catch {
            res.redirect('/account?message=Įvyko klaida&status=danger')
        }

        return
    }


    res.redirect('/account?message=Neteisingai užpildyti duomenys&status=danger')
})

app.get('/new-transfer', (req,res) => {
    res.render('new-transfer')
})

app.get('/transfer-approved/:id', async (req, res) => {
    const id = req.params.id
    try {
        const db = await readFile(file, 'utf8')
        let database = JSON.parse(db)
        database[id].status = 'approved'

        await writeFile(file, JSON.stringify(database), 'utf8')
        res.redirect('/account?message=Pavedimas atliktas&status=success')

    } catch {
        res.redirect('/account?message=Įvyko klaida&status=danger')
    }
})

app.get('/transfer-rejected/:id', async (req, res) => {
    const id = req.params.id
    try {
        const db = await readFile(file, 'utf8')
        let database = JSON.parse(db)
        database[id].status = 'rejected'

        await writeFile(file, JSON.stringify(database), 'utf8')
        res.redirect('/account?message=Pavedimas atšauktas&status=danger')

    } catch {
        res.redirect('/account?message=Įvyko klaida&status=danger')
    }
})


app.listen(3000)