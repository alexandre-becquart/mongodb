db = connect('technocite'); //on se connecte à la database

let update = { // la maj que l'on veut aplliquer
    "name": "Joelle Hoquart",
    "age": 40,
    "school": 'IRAM' // si l'élément n'existe pas il l'ajoute
};
// on lui demande de remplacer par l'update
db.students.update({
    "name": "Joelle Hoquart"
}, {
    $set: {
        "age": 40,
        "school": "IRAM"
    }
}, {
    multi: true
})

// let student = db.students.findOne({ // on trouve l'élément qui contient notre critère
//     "name": "Joelle Hoquart"
// })

// printjson(student) // on l'affiche 

/* -------------------------- supprimer un élément -------------------------- */

// db.students.remove({
//     "age": 40
// }) // il supprime tous les éléments qui ont 40 ans