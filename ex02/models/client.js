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

schema.pre('save', function () { // pas de fonction arrow car 
    this.lastname = this.lastname.toUpperCase();


});







module.exports = Mongoose.model('Client', schema)