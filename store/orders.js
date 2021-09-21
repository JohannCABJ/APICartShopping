const db = {
    'orders':[
        {id:'12', name:'Banano', cant:'20', user:'Juan'},
        {id:'13', name:'Papaya', cant:'20', user:'Andres'},
        {id:'14', name:'Uva', cant:'20', user:'Pedro'}
    ]
}

async function list(tabla){
    return db[tabla]
}

async function get (tabla,id){
    let col = await list(tabla);
    return col.filter(item => item.id === id)[0]
}

async function upsert(tabla,data){
    if (!db[tabla]){
        db[tabla] = []
    }
    db[tabla].push(data)
    return(`item ${db} ha sido agregado`)
}

async function remove(table, id) {
    let del = await list(table)
    del.findIndex(item => item.id === id)
    del.splice(del,1)
    return(`item ${id} eliminado` )

}

module.exports ={
    list,
    get,
    upsert,
    remove
}