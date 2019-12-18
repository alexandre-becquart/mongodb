/* -------------------------------------------------------------------------- */
/*                                    Mongo                                   */
/* -------------------------------------------------------------------------- */

const db = connect('technocite')

let dbs = db.films.find();
let count = db.films.find().count();

print(`\n${count}\n`)

dbs.forEach(film => {
    printjson(film)
});