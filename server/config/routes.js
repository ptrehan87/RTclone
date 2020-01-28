const mainController = require('../controllers/mainController')
module.exports = (app) => {
    app.get('/api/findAll', (req, res) => {
        mainController.findAll(req, res);
    })
    app.post('/api/create', (req, res) => {
        mainController.create(req, res);
    })
    app.get('/api/findOne/:id', (req, res) => {
        mainController.findOne(req, res);
    })
    app.put('/api/edit/:id', (req, res) => {
        mainController.edit(req, res);
    })
    app.delete('/api/delete/:id', (req, res) => {
        mainController.delete(req, res);
    })

}