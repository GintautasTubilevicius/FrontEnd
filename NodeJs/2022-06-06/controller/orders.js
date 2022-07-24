import express from 'express'
import path from 'path'
import { Items } from '../database/connection.js'
import { Daiktai } from '../database/connection.js'

const router = express.Router()


//Teisingi prisijungimo duomenys
const credentials = {
    login: 'admin@bit.lt',
    password: '1234'
}

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./templates/index.html'))
})

router.post('/new', async (req, res) => {
    try {
        await Items.create(req.body)
        res.status(200).end()
    } catch {
         res.sendStatus(500)
    }
})


router.get('/login', (req, res) => {
    res.sendFile(path.resolve('./templates/login.html'))
})

router.post('/authenticate', (req, res) => {
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

router.get('/admin', (req, res) => {
    if(req.session.loggedin) {
        res.sendFile(path.resolve('./templates/admin.html'))
    } else {
        res.sendFile(path.resolve('./templates/login.html'))
    }
})

router.get('/all', async (req, res) => {
    try {
        const ordersList = await Items.find()
        res.status(200).json(ordersList)
    } catch {
        res.sendStatus(500)
    }
})

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
    if(req.session.loggedin) {
        await Items.findByIdAndDelete(id)
        res.sendStatus(200)
    } else {    
        res.sendStatus(500)
    }
})  

router.put('/update/:id', async (req, res) => {
    const id = req.params.id
    try {
        await Items.findByIdAndUpdate(id, req.body)
        res.sendStatus(200)
    } catch {
        res.sendStatus(500)
    }
})  

router.get('/prekes', (req, res) => {
    if(req.session.loggedin) {
        res.sendFile(path.resolve('./templates/prekes.html'))
    } else {
        res.sendFile(path.resolve('./templates/login.html'))
    }
})

router.get('/prekes/all', async (req, res) => {
    try {
        const prekesList = await Daiktai.find()
        res.status(200).json(prekesList)
    } catch {
        res.sendStatus(500)
    }
})

router.post('/prekes/new', async (req, res) => {
    if(req.session.loggedin) {
        await Daiktai.create(req.body)
        res.status(200).end()
    } else {
         res.sendStatus(500)
    }
})

router.delete('/prekes/delete/:id', async (req, res) => {
    const id = req.params.id
    if(req.session.loggedin) {
        await Daiktai.findByIdAndDelete(id)
        res.sendStatus(200)
    } else {    
        res.sendStatus(500)
    }
})  

router.put('/prekes/update/:id', async (req, res) => {
    const id = req.params.id
    if(req.session.loggedin) {
        await Daiktai.findByIdAndUpdate(id, req.body)
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }
})  

export default router