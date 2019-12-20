const fs = require('fs').promises;



module.exports = (req, res) => {
    fs.readFile(`${process.cwd()}/views/home.html`, 'UTF-8', (err, output) => {
        if (err) throw err;
        res.end(output)
    })
}