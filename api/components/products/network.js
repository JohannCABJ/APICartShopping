const express = require ('express')
const response = require ('../../../network/response')
const Controller = require ('./index')

const router = express.Router()

router.get('/', list)
router.get('/:id', get);
router.delete('/:id', remove);

function list (req,res){
    Controller.list()
        .then((lista)=>{
            response.success(req,res,lista,200) 
        })
        .catch((err)=>{
            response.error(req,res,err.message,500) 
        })
}

function get (req,res){
    Controller.get(req.params.id)
     .then((producto)=>{
        response.success(req,res,producto,200)  
     })
     .catch((err)=>{
        response.error(req,res,err.message,500) 
    })    
}

function remove(req, res) {
    Controller.remove(req.params.id,)
        .then((producto) => {
            response.success(req, res, user, 201);
        })
        .catch(next)
}


module.exports = router
