/* -------------------------------------------------------------------------- */
/*                                  Mongoose                                  */
/* -------------------------------------------------------------------------- */

const Mongoose = require('mongoose');
const Client = require('./models/client')

Mongoose.Promise = global.Promise;

Mongoose.connect('mongodb://localhost:27017/technocite', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error) => {
    console.log("connected to datbase technocite");
})

let client = new Client({
    firstname: 'test2',
    lastname: 'test2',
    adresse: 'test2',
    vat: 'test2',
    company: 'test2',
    sectors: ['test2']
})

//client.save();

const findrecord = async () => {
    let record = await Client.find({
        'vat': 'test'
    })

    console.log(record);


}

findrecord()