const axios = require('axios');
var FB = require('fb');
var fs = require('fs');

module.exports = {
    async show(req, res) {
        try {
            FB.setAccessToken('EAAC9PLrWx4sBAHujctuE0uSOdwzq8dEJEmOwnnSjp4Oq1EMrSeHPPRxSg0PlaMCbyVZCdwqZBFQIg96ckjcEqJ7SKAqocy991ZAO2XWAjqkEOmfSfnnOKPGZCpAZCEimSPDMORFYmkZAtIYuHuc2eHcowIllxYWtT56aKB2G0h3QZDZD');
            FB.api('/me', {
                    locale: 'pt_BR',
                    fields: 'first_name ,last_name, location{name}, birthday, gender, email, picture.type(large)',
                },
                function (response) {
                    return res.json(response);
                }
            );
        } catch (err) {
            console.error('ERROR: Problemas com o a Aplicação!');
        }
    }
}