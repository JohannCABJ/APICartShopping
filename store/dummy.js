const db = {
    'products':[
        {id:'12', name:'Banano'},
        {id:'13', name:'Papaya'},
        {id:'14', name:'Uva'},
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
    db[collection].push(data)
}

async function remove(table, id) {
    let del = await list(table)
    del.findIndex(item => item.id === id)
    del.splice(del,1)
    return(`producto ${id} eliminado` )

}

module.exports ={
    list,
    get,
    upsert,
    remove
}