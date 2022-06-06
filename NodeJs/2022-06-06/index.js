import express from 'express'
import { Items } from './database/connection.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()

app.use( express.json() )

const __dirname = dirname( fileURLToPath(import.meta.url) )

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html')
})

app.post('/api/items/new', async (req, res) => {
    try {
        await Items.create(req.body)
        res.status(200).end()
     } catch {
         res.sendStatus(500)
     }
})



app.listen(3000)