const facebook = require('./../services/facebook')
const github = require('./../services/github')
const githubrepos = require('./../services/githubrepos')
const CurriculoModel = require('./../services/dados');




exports.teste = async function (req, res) {

    tudo = {};
    tudo.git = await github.show;
    tudo.curriculo = CurriculoModel;
    tudo.face = facebook.show;
    res.json(tudo)





}