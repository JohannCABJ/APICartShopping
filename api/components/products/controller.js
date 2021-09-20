const nanoid = require('nanoid')
const TABLA = 'products'

module.exports = function (injectedStore){
    let store = injectedStore

    if (!store){
        store = require('../../../store/dummy')
    }
    
    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    function upsert(body) {
        const products = {
            name:body.name,
        }
        if (body.id){
            product.id = body.id
        }else{
            product.id = nanoid()
        }
        return  store.upsert(TABLA,product)
    }
    function remove(idu) {
        return store.remove(TABLA,idu);
    }

    return {
        list,
        get,
        upsert,
        remove,
    }
}
