const Mongoose = require("mongoose")
const Double = require('@mongoosejs/double');

let Schema = Mongoose.Schema;

let schema = new Schema([{
    name: String,
    dateadd: Date,
    price: {
        type: Double
    },
    stock: Number
}])

module.exports = Mongoose.model('product', schema)