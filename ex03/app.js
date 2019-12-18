const Mongoose = require('mongoose');
const Products = require('./models/product')

Mongoose.Promise = global.Promise


Mongoose.connect('mongodb://localhost:27017/technocite', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error) => {
    console.log('connected to database technocite');
})

/* ----------------------- lister les prix decroissant ---------------------- */

// const listPrixDecr = async () => {
//     let record = await Products.aggregate([{
//         $sort: {
//             price: -1
//         }
//     }])
//     record.forEach(el => {
//         console.log(el)
//     })

//     //console.log(record);

// }


// listPrixDecr()

// db.products.aggregate([{$sort:{price:-1}}])


/* -------------------------------------------------------------------------- */



/* ----------------------------- lister par nom ----------------------------- */


// let listName = async () => {
//     let record = await Products.aggregate([{
//         $sort: {
//             "name": 1
//         }
//     }])

//     record.forEach(product => {
//         console.log(product.name)
//     });
//     //console.log(record);
// }

// listName()



/* -------------------------------------------------------------------------- */

/* ---------------- lister date d'ajout + recente à - récente --------------- */

// let listDate = async () => {
//     let record = await Products.aggregate([{
//         $sort: {
//             "dateadd": -1
//         }
//     }])

//     // record.forEach(date => {
//     //     console.log(date)
//     // });
//     console.log(record);
// }

// listDate()

/* -------------------------------------------------------------------------- */

/* ---------------------------- filtrer les prix ---------------------------- */

// let prixSupp = async () => {
//     let record = await Products.find({
//         price: {
//             $gte: 3
//         }
//     }, {
//         name: 1,
//         price: 1
//     })
//     record.forEach(el => console.log(el))
// }

// prixSupp()

/* -------------------------------------------------------------------------- */

/* ------------------------- filter rupture de stock ------------------------ */

// let ruptureStock = async () => {
//     let record = await Products.find({
//         stock: {
//             $lt: 1
//         }
//     }, {
//         name: 1,
//         price: 1
//     })
//     record.forEach(el => console.log(el))
// }

// ruptureStock()


/* -------------------------------------------------------------------------- */

/* ----------------- plus petit que 3  et le prix inf à ... ----------------- */

// let ppAndInf = async () => {
//     let record = await Products.find({
//         stock: {
//             $lt: 3
//         },
//         price: {
//             $lt: 5
//         }
//     }, {
//         name: 1,
//         price: 1
//     })
//     record.forEach(el => console.log(el))
// }

// ppAndInf()

/* -------------------------------------------------------------------------- */

/* -------------------------- augmentation de 0.20 -------------------------- */

// let update = async () => {
//     let record = await Products.updateMany({}, {
//         $inc: {
//             price: 0.2
//         }
//     }, {
//         multi: true
//     })

//     // record.forEach(el => console.log(el))
//     console.log(record);
// }

// update()


/* -------------------------------------------------------------------------- */

/* --------------------------- ajouter 5 à stock 0 -------------------------- */

let update2 = async () => {
    let record = await Products.updateMany({
        stock: {
            $lt: 1
        }
    }, {
        $inc: {
            stock: 5
        }
    }, {
        multi: true
    })

    //record.forEach(el => console.log(el))
    console.log(record);
}

update2()


/* -------------------------------------------------------------------------- */

/* --------------------------- suprimer un élément -------------------------- */

let deleted = async () => {

    let record = await Products.findOneAndDelete({
        name: "yoplait panier sensation framboise citron"
    }, err => {
        if (err) throw err
        console.log("Item deleted");
    })

    //record.forEach(el => console.log(el))
    //console.log(record);
}

deleted()

/* -------------------------------------------------------------------------- */

/* ------------------------------ faire un dump ----------------------------- */

// mongodump -d technocite --gzip --archive=DB_product.zip


/* -------------------------------------------------------------------------- */