import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Coctails = new Schema({
    title: String,
    instructions: String,
    thumbnail: String
})

export default mongoose.model('Coctails', Coctails)