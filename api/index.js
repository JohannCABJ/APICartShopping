const express = require('express');
const swaggerUi = require('swagger-ui-express')

const config = require('../config.js');
const products = require('./components/products/network');
const orders = require('./components/orders/network');

const app = express();
const swaggerDoc = require('./swagger.json')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ROUER
app.use('/api/orders', orders)
app.use('/api/products', products);
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDoc))


app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
});