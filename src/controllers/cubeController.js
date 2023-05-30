const cubeController = require('express').Router();
const { getAllCubes, saveCubes, getOneCube, createCube } = require('../services/cubeService');





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




module.exports = cubeController