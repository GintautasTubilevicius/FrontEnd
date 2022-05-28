import express from 'express'
import {dirname} from 'path'
import { fileURLToPath } from 'url'
import { faker } from '@faker-js/faker'


const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/templates/index.html')
})

app.get('/person', (req, res) => {


    let user = {
        picture: faker.image.avatar(),
        name: faker.name.findName(),
        gimimo: faker.date.birthdate(),
        address: faker.address.streetAddress(),
        phone: faker.phone.phoneNumber('+370 ########'),
        pass: faker.random.alphaNumeric(8)
    }

    res.json(user)
})


app.listen(3000)