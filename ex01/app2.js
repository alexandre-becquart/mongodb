const db = connect('technocite') //on se connecte à la database


// db.students.insert( // on ajoute les éléments dans la DB
//     [{
//         "name": "Sébastien Cardoen",
//         "age": 25
//     }, {
//         "name": "Gilles Bertrand",
//         "age": 45
//     }, {
//         "name": "Joelle Hoquart",
//         "age": 45
//     }, {
//         "name": "Gilles Bertrand",
//         "age": 45
//     }, {
//         "name": "Gilles Bertrand",
//         "age": 45
//     }, ]

// )

// db.students.insert([{
//     "name": "Alex Be",
//     "age": 50
// }])

let students = db.students.find();

students.forEach(student => {
    printjson(student)
});

print('------------------------------------------------')

let oldStudents = db.students.find({
    "age": {
        $lte: 30
    }
}, {
    "name": 1
})

oldStudents.forEach(student => {
    printjson(student)
})

print('------------------------------------------------')

let oldStudents2 = db.students.find({
    $and = [{
        "age": {
            $lte: 30
        }
    }, {
        "age": $exist
    }]
})

oldStudents2.forEach(student => {
    printjson(student)
})