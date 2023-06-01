const cubeController = require('express').Router();
const { getAllAccesories } = require('../services/accessoryService');
const { getAllCubes, saveCubes, getOneCube, createCube, addAccessory, getOneWithAccessories } = require('../services/cubeService');





cubeController.get('/create', async (req,res) => {
   
    
    res.render('create')
})


cubeController.post('/create', async (req,res) => {

    const cubeData = {
        name : req.body.name,
        description : req.body.description,
        imageUrl : req.body.imageUrl,
        difficultyLevel: Number(req.body.difficultyLevel)
    }
    const cube =  await createCube(cubeData)
    
    res.redirect('/')
})

cubeController.get('/:cubeId/details', async (req,res) => {

    const cube = await getOneCube(req.params.cubeId)
    
   
    
    res.render('details', {cube})

})

cubeController.get('/:cubeId/accessories/attach', async (req,res) => {

    const cube = await getOneCube(req.params.cubeId).lean()
    const allAccessories = await getAllAccesories().lean()
    
   
    
    res.render('accessories/attachAccessory', {title: 'Attach Accesory',cube,allAccessories})

})

cubeController.post('/:cubeId/accessories/attach', async (req,res) => {

    await addAccessory(req.body.accessory, req.params.cubeId)
    
   
    
    //res.redirect(`/cube/${cubeId}/details`)

})




module.exports = cubeController