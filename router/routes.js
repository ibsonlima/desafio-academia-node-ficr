const CurriculoController = require('./../controllers/CurriculoController')

const facebook = require('./../services/facebook')
const github = require('./../services/github')

const routes = require('express').Router();

routes.get('/', function (req, res) {
    res.json({
        status: "Api rodando",
        code: 200
    });
})

routes.get('/api/curriculo', github.show);

routes.get('*', function (req, res) {
    res.json({
        error: 404,
        about: "Rota não encontrada"
    });
});

module.exports = routes;