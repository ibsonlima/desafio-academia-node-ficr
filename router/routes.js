const CurriculoController = require('./../controllers/CurriculoController')
const facebook = require('./../services/facebook')
const github = require('./../services/github')
const githubrepos = require('./../services/githubrepos')

const routes = require('express').Router();

routes.get('/', function (req, res) {
    res.json({
        status: "Api rodando",
        code: 200
    });
})

routes.get('/api/curriculo', CurriculoController.teste);
routes.get('/api/git', github.show);
routes.get('/api/face', facebook.show);

routes.get('*', function (req, res) {
    res.json({
        error: 404,
        about: "Rota não encontrada"
    });
});

module.exports = routes;