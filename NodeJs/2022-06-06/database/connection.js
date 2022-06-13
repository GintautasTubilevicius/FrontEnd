import mongoose from 'mongoose'
import items from '../models/items.js'
import daiktai from '../models/prekes.js'

mongoose.connect('mongodb://localhost:27017/uzsakymas', (error) => {
    if (error) {
        console.log('Nepavyko prisijungti prie duomenu bazes: ' + error)
        return 
    }
})

export const Items = mongoose.model('orders', items)

export const Daiktai = mongoose.model('prekes', daiktai)
