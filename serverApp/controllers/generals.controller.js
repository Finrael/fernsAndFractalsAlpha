const General = require('../models/generals.models');

exports.create=  (req,res)=>{
    if(!req.body){
        res.status(400).send({message: 'the fields must not be empty'})
    }

    const general = {
        status: true,
        material: req.body.material,
        shape: req.body.shape,
        weight: req.body.weight,
        amountOne: req.body.amountOne,
        typeOne: req.body.typeOne,
        amountTwo: req.body.amountTwo,
        typeTwo: req.body.typeOne,
        box: req.body.box,
        origin: req.body.origin,
        purchaseDate: req.body.purchaseDate ||''
    }
    General.create( general, (err,data)=>{
        if(err)res.status(500).send({message:err.message || 'some error on create'})
            else res.send(data)
    })

}

exports.getAll = (req,res)=>{
    General.getAll((err,data)=>{
        if(err) res.status(500).send({message: err.message || 'some error on getAll'})
            else res.send(data)
    })
}