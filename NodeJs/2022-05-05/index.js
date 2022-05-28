import express from 'express'
import {dirname} from 'path'
import { fileURLToPath } from 'url'

// Express modulio iniciavimas
const app = express()
// sugeneruojamas esamos direktorijos absoliutus kelias
const __dirname = dirname(fileURLToPath(import.meta.url))
// Kelias (route'as)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html')
})

app.get('/apie-mus', (req, res) => {
    res.sendFile(__dirname + '/templates/antras.html')
})
app.get('/darbo-galimybes', (req, res) => {
    res.sendFile(__dirname + '/templates/darbo-galimybes.html')
})
app.get('/klientai', (req, res) => {
    res.sendFile(__dirname + '/templates/klientai.html')
})
app.get('/kontaktai', (req, res) => {
    res.sendFile(__dirname + '/templates/kontaktai.html')
})




app.listen(3000)

