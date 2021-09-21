const store = require('../../../store/orders')// //aqui la DB por default que queremos setear en nuestro controller
const ctrl = require('./controller') //

module.exports = ctrl(store)