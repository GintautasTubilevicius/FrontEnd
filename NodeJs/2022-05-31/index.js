import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import Coctails from './models/kokteiliai_details.js'

await mongoose.connect('mongodb://localhost:27017/gerimai')

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(cors())


app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/templates/index.html')
})

app.get('/kokteiliai', async (req, res) => {
    res.json(await Coctails.find())
})

app.get('/delete/:id', async (req, res) => {
    const id = req.params.id
    const deleted = await Coctails.deleteOne({
        _id: id
    })
    if (deleted.deletedCount > 0) {
        res.status(200).send('Kokteilis ištrintas')
    } else {
        res.status(400).send('Nepavyko rasti tokio kokteilio aprašymo')
    }
})
app.listen(3000)