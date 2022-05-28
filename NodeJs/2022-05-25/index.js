import express from 'express'
import cors from 'cors'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html')
})

app.get('/api/', (req, res) => {
    const objektas = {
        vardas: 'Jonas',
        pavarde: 'Jonaitis'
    }
    res.json(objektas)
})

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

app.get('/api/weather', (req, res) => {

    const conditionRandom = ['Windy', 'Rain', 'Sunshine']
    const locationRandom = ['London', 'Madrid', 'Vilnius', 'Berlin']

    let oras = {
        condition: conditionRandom[random(0, 2)],
        degrees: random(-8, 40),
        location: locationRandom[random(0, 3)],
        windSpeed: random(1, 10),
        humidity: random(40, 100)
    }

    res.json(oras)
})


app.listen(3000)