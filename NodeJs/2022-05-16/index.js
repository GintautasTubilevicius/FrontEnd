import express from 'express'
import {engine} from 'express-handlebars'
import {readFile, writeFile} from 'fs/promises'

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './templates')


//Express konfiguracijos prapletimas norint priimti POST metodu
app.use(express.urlencoded({
    extended: false
}))

//Statiniu failu perdavimo i narsykle konfiguracijos eilute
app.use('/resources', express.static('assets'))

const file = './db/database.json'

app.get('/', async (req,res) => {
    try {
    const data = await readFile(file, 'utf8')
    res.render('todolist', {
        message: req.query.message,
        status: req.query.status,
        data: JSON.parse(data)
    })
    } catch {
        res.render('todolist', {
            message: 'Nepavyko perskaityti duomenu bazes failo',
            status: 'danger'
        })
    }

    
})

app.post('/add-task', async (req, res) => {
    const task = req.body.task
    if(!task) {
        console.log('Neuzpildytas laukelis')
        return
    }

    try{
        const db = await readFile(file, 'utf8')
        let json = JSON.parse(db)
        let today = new Date()
        json.push({
            task, 
            date: today.toLocaleDateString('lt-LT')
        })
        await writeFile(file, JSON.stringify(json), 'utf8')

        res.redirect('/?message=Duomenys sėkmingai išsaugoti&status=success')

    } catch {
        res.redirect('/?message=Įvyko klaida išsaugant duomenis&status=danger')
    }

})

app.get('/delete-task/:id', async (req, res) => {
    const id = req.params.id
    try {
        const db = await readFile(file, 'utf8')
        let database = JSON.parse(db)
        database.splice(id, 1)

        await writeFile(file, JSON.stringify(database), 'utf8')
        res.redirect('/?message=Užduotis sėkmingai ištrinta&status=success')

    } catch {
        res.redirect('/?message=Nepavyko ištrinti užduoties&status=danger')
    }

})

app.get('/complete-task/:id', async (req, res) => {
    const id = req.params.id
    try {
        const db = await readFile(file, 'utf8')
        let database = JSON.parse(db)
        if (database[id].done === '' || database[id].done === false) {
            database[id].done = true
        }

        else database[id].done = false
        

        await writeFile(file, JSON.stringify(database), 'utf8')
        res.redirect('/?message=Užduotis sėkmingai užbaigta&status=success')

    } catch {
        res.redirect('/?message=Nepavyko užbaigti užduoties&status=danger')
    }

})



app.listen(3000)