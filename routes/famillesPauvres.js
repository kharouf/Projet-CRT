const express = require('express')

const famillesPRouter = express.Router()

const famillesP =require("../models/famillesPauvres")



// POST New newfamillesP
famillesPRouter.post('/add', async (req, res) => {
    try {
        const newfamillesP = new famillesP (req.body)
        const result= await newfamillesP.save()
        res.send({ famillesP:result, message: 'famillesP Added ' })
        
    } catch (error) {
        console.log(error)
    }

}
)

// Get All newfamillesPs
famillesPRouter.get('/', async (req, res) => {

    try {
        const result= await famillesP.find()
        
        res.send({ famillesP:result, message: 'All famillesP is  GETED ' })
        
    } catch (error) {
        console.log(error)
    }

}
)

// Get newfamillesP by id
famillesPRouter.get('/:id', async (req, res) => {

    try {
        const result= await famillesP.find({ _id:req.params.id} ) 
        
        
        res.send({ famillesP:result, message: ' famillesP GETED'+ " "+ req.params.id })

        
    } catch (error) {
        console.log(error)
    }

}
)
// Delete famillesP By id
famillesPRouter.delete('/:id', async (req, res) => {

    try {
        const result= await famillesP.findByIdAndDelete({ _id:req.params.id} ) 
        
        
        res.send({  message: ' famillesP Deleted'+ " "+ req.params.id })

        
    } catch (error) {
        console.log(error)
    }

}
)
// Update famillesP BY id

famillesPRouter.put('/:id', async (req, res) => {

    try {
        const result= await famillesP.findByIdAndUpdate(
            { _id:req.params.id} ,
            { $set:{...req.body}}) 
        
        
        res.send({ famillesP:result, message: ' famillesP Updated'+ " "+ req.params.id })

        
    } catch (error) {
        console.log(error)
    }

}
)

module.exports = famillesPRouter