import express from 'express'
import { Tasks } from './database/connection.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()

app.use( express.json() )

const __dirname = dirname( fileURLToPath(import.meta.url) )

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html')
})

// Visu uzduociu paemimas is duomenu bazes
app.get('/api/tasks/all', async (req, res) => {
    try {
       const taskList = await Tasks.find()
       res.status(200).json(taskList)
    } catch {
        // res.status(500).end()
        res.sendStatus(500)
    }
})

// Uzduoties pridejimas

app.post('/api/tasks/new', async (req, res) => {
    try {
        await Tasks.create(req.body)
        res.status(200).end()
     } catch {
         res.sendStatus(500)
     }
})

//Uzduoties redagavimas
app.put('/api/tasks/edit/:id', async (req, res) => {
    const id = req.params.id
    try {
        await Tasks.findByIdAndUpdate(id, req.body)
        res.sendStatus(200)
     } catch {
         res.sendStatus(500)
     }
})

// Uzduoties istrynimas
app.delete('/api/tasks/delete/:id', async (req, res) => {
    const id = req.params.id
    try {
        await Tasks.findByIdAndDelete(id)
        res.sendStatus(200)
     } catch {
         res.sendStatus(500)
     }
})


app.listen(3000)