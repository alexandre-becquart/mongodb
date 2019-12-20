const routes = [{
    url: '/',
    controller: 'home',
    method: 'GET',
    action:
}]

module.exports = (req, res) => {

    if (request.url === 'faveicon.ico') response.end() //gérer le favicon 

    let index = routes.findIndex(item => item.url === req.url && routes.method === )

    if (index != -1) {
        console.log('Route match');
        require(`${process.cwd()}/controllers/${routes[index].controller}`)(req, res)
    } else {
        res.end()
    }
}