const express = require('express');
const app = express();
const routes = require('./router/routes');
app.use('/', routes);
require('dotenv');
app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor rodando na porta 3000...')
});

module.exports = app;