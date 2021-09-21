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

    function remove(idu) {
        return store.remove(TABLA,idu);
    }

    return {
        list,
        get,
        remove,
    }
}
