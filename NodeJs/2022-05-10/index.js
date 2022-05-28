import express from 'express'
import { engine } from 'express-handlebars'

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './templates')



app.get('/', (req, res) => {
    let pavyko = ''
    let nepavyko = ''
    const duomenys = {
    email: 'admin@bit.lt',
    password: 'labas1234'
}
    let returned = {}
    const pass = req.query.pass
    const email = req.query.email
    console.log(parseInt(Object.keys(req.query).length))
    if (parseInt(Object.keys(req.query).length) > 0) {
        if (pass != '' && 
            email != '' && 
            email === duomenys.email && 
            pass === duomenys.password) { 
                // console.log('Prisijungimas pavyko')
                // pavyko = 'Prisijungimas pavyko'
                // returned = {message: 'Prisijungimas pavyko', status: 'success'}
                res.redirect('/account')
                return
            } else {
                console.log('Neteisingi prisijungimo duomenys')
                nepavyko = 'Neteisingi prisijungimo duomenys'
                returned = {message: 'Neteisingi prisijungimo duomenys', status: 'danger'}
            }
        }
    res.render('forma', {pavyko, nepavyko})
    // res.render('forma',  returned)
})
app.get('/account', (req, res) => {
    // let patvirtinti = req.query.patvirtinti
    // let atmesti = req.query.atmesti
    // if (patvirtinti === '') patvirtinti = 'Pavedimas sekmingai ivykdytas'
    // else if (atmesti === '') atmesti = 'Pavedimas atmestas'
    
    // res.render('account', {patvirtinti, atmesti})
    const data = {
        message: req.query.message,
        status: req.query.status
    }
    res.render('account', data)
})

app.get('/account/:vardas', (req,res) => {
    console.log(req.params)
    res.send('Vardas gautas ' + req.params.vardas)
})

app.get('/transfer', (req, res) => {
    // const saskaita = req.query.saskaita
    // const vardas = req.query.vardas
    // const paskirtis = req.query.paskirtis
    const data = {
        number: req.query.account_number,
        recipient: req.query.recipient,
        reference: req.query.reference
    }

    // res.render('transfer', {saskaita, vardas, paskirtis})
    res.render('transfer', data)
})

app.listen(3000)