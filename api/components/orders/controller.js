const {nanoid} = require('nanoid')
const TABLA = 'orders'

module.exports = function (injectedStore){
    let store = injectedStore

    if (!store){
        store = require('../../../store/orders')
    }

    async function list() {
        return store.list(TABLA);
    }

    async function get(id) {
        return store.get(TABLA, id);
    }

    async function remove(idu) {
        return store.remove(TABLA,idu);
    }

    async function upsert(body) {
        const orders = {
            name: body.name,
            cant: body.cant,
            user: body.username,
        }

        if (body.id) {
            orders.id = body.id;
        } else {
            orders.id = nanoid();
        }

        return store.upsert(TABLA, orders);
    }

    return {
        list,
        get,
        upsert,
        remove,
    }
}
