const Http = require('http');
const Router = require('./app.router')

Http.createServer(Router).listen(8020, (err) => {
    if (err) throw err;
    console.log('Server is running on http://localhost:8020');
})