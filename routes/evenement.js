const express = require('express')

const evenementRouter = express.Router()

const evenement = require("../models/evenement")



// POST New evenement
evenementRouter.post('/add', async (req, res) => {
    const {endtDate}= (req.body)

    try {
        const newevenement = new evenement ({...req.body})
        const result= await newevenement.save()
        res.send({ evenement:result, message: 'evenement Added ' })
        
    } catch (error) {
        console.log(error)
    }

}
)

// Get All evenements
evenementRouter.get('/get', async (req, res) => {

    try {
        const result= await evenement.find()
        
        res.send({ evenement:result, message: 'All evenement is  GETED ' })
        
    } catch (error) {
        console.log(error)
    }

}
)

// Get evenement by id
evenementRouter.get('/:id', async (req, res) => {

    try {
        const result= await evenement.find({ _id:req.params.id} ) 
        
        
        res.send({ evenement:result, message: ' evenement GETED'+ " "+ req.params.id })

        
    } catch (error) {
        console.log(error)
    }

}
)
// Delete evenement By id
evenementRouter.delete('/:id', async (req, res) => {

    try {
        const result= await evenement.findByIdAndDelete({ _id:req.params.id} ) 
        
        
        res.send({  message: ' evenement Deleted'+ " "+ req.params.id })

        
    } catch (error) {
        console.log(error)
    }

}
)
// Update evenement BY id

evenementRouter.put('/:id', async (req, res) => {

    try {
        const result= await evenement.findByIdAndUpdate(
            console.log(result),
            { _id:req.params.id} ,
            { $set:{...req.body}}) 
        
        
        res.send({ evenement:result, message: ' evenement Updated'+ " "+ req.params.id })

        
    } catch (error) {
        console.log(error)
    }

}
)




module.exports = evenementRouter