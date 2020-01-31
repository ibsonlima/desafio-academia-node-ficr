require("dotenv").config();
var FB = require('fb');

FB.setAccessToken('EAAC9PLrWx4sBAHujctuE0uSOdwzq8dEJEmOwnnSjp4Oq1EMrSeHPPRxSg0PlaMCbyVZCdwqZBFQIg96ckjcEqJ7SKAqocy991ZAO2XWAjqkEOmfSfnnOKPGZCpAZCEimSPDMORFYmkZAtIYuHuc2eHcowIllxYWtT56aKB2G0h3QZDZD');
FB.api('/me', {
    locale: 'en_US',
    fields: 'first_name ,last_name, location{name}, birthday, gender, email, picture.type(large)',
  },
  function (response) {
    return res.json(response);
  }
);