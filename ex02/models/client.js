/* ----------------------- création d'un schéma client ---------------------- */

const Mongoose = require('mongoose')

let Schema = Mongoose.Schema;

let schema = new Schema({
    firstname: String,
    lastname: String,
    adresse: String,
    vat: String,
    company: String,
    sectors: [String]
})

module.exports = Mongoose.model('Client', schema)