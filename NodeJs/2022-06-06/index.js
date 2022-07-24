import express from 'express'
import { Items } from './database/connection.js'
import { Daiktai } from './database/connection.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import session from 'express-session'
import router from './controller/orders.js'


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



const __dirname = dirname( fileURLToPath(import.meta.url) )


app.use('/eshop', router)

// app.use('/prekes', router)


app.listen(3000)