const { createAccesory } = require('../services/accessoryService');

const accessoryController = require('express').Router();






accessoryController.get('/create', (req,res)=> {
    res.render('accessories/createAccessory', {
        title: 'Create Accesory'
    })

})

accessoryController.post('/create', async (req,res)=> {


    const {name, description, imageUrl} = req.body;
    await createAccesory(name, description, imageUrl)
    res.redirect('/')

    
    
    res.render('accessories/createAccessory', {
        title: 'Create Accesory'
    })

})


module.exports = accessoryController