const accessoryController = require('express').Router();






accessoryController.get('/create', (req,res)=> {
    res.render('accessories/createAccessory', {
        title: 'Create Accesory'
    })

})

accessoryController.post('/create', (req,res)=> {

    
    res.render('accessories/createAccessory', {
        title: 'Create Accesory'
    })

})


module.exports = accessoryController