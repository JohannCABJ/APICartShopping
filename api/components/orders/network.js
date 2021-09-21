const express = require ('express')
const response = require ('../../../network/response')
const { upsert } = require('../../../store/orders')
const Controller = require ('./index')

const router = express.Router()


router.get('/', list)
router.get('/:id', get);
router.delete('/:id', remove);
router.post('/', order)

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
        response.success(req,res,producto,201)
     })
     .catch((err)=>{
        response.error(req,res,err.message,500)
    })
}

function remove(req, res) {
    Controller.remove(req.params.id,)
        .then((item) => {
            response.success(req, res, item, 202);
        })
        .catch(error =>{
            console.error(error)
        })
}

function order (req,res){
    console.log(req.body)
    Controller.upsert(req.body)
    .then((order)=>{
        response.success(req, res, order,204)
    })
    .catch((err)=> {
        console.error(err)
    })
}
module.exports = router