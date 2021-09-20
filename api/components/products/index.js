const store = require('../../../store/dummy')// //aqui la DB por default que queremos setear en nuestro controller
const ctrl = require('./controller') //

module.exports = ctrl(store)
