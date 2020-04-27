const express = require("express");
const mysql = require("mysql")
const router = express.Router();
const database = require('../connection');

let lhs_med = {
    quantity:Number,
    ache_med_med_id:Number,
    name:String,
    id:Number
    
}
router.get('/all', (req,res)=>{
    let sql = "SELECT * FROM lhs_med";
    database.query(sql,(err,result)=>{
        if(err){
            throw err        
        }
       
        res.send(result)
        console.log(result)
    })
})
router.get(`/:id`, (req,res)=>{
    let sql = "SELECT * FROM lhs_med WHERE id ="+req.params.id;
    database.query(sql,(err,result)=>{
        if(err){
            throw err        
        }
        
        res.send(result[0])
        
    })
})

router.post('/add', async(req,res)=>{
    try{

    lhs_med = {
        ... req.body
    }
   
    let sql = `INSERT INTO lhs_med ( name, quantity) VALUES ("${lhs_med.name}", 
                "${lhs_med.quantity}")`
    database.query(sql,(err,result)=>{
        if(err){
            throw err        
        }
        res.send(result)
        console.log(result)
    })
}catch(err){
    console.log(err)
}
})
router.put('/update', async(req,res)=>{
    try{

    patient = {
        ... req.body
    }
    let sql = `UPDATE lhs_med SET  name='${lhs_med.name}', quantity='${lhs_med.quantity}' WHERE id=${lhs_med.id}`
    database.query(sql,(err,result)=>{
    if(err){
            throw err        
        }
        res.send(result)
        console.log(result)
    })
}catch(err){
    console.log(err)
}
})

module.exports = router;