const express = require('express');
const swaggerUi = require('swagger-ui-express')

const config = require('../config.js');
const products = require('./components/products/network');

const app = express();
const swaggerDoc = require('./swagger.json')
// ROUER
app.use('/api/products', products);
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
});