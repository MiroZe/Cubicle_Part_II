const cubeController = require('express').Router();
const uniqId = require('uniqid')

const { getAllCubes, saveCubes, getOneCube } = require('../services/cubeService');





cubeController.get('/create', async (req,res) => {
   
    
    res.render('create')
})


cubeController.post('/create', async (req,res) => {
    const result =  await getAllCubes()
    const newCube = {
        id:uniqId(),
        name : req.body.name,
        description : req.body.description,
        imageUrl : req.body.imageUrl,
        difficultyLevel: Number(req.body.difficultyLevel)

    }
   
    result.push(newCube);
    
    await saveCubes(JSON.stringify(result,null, 2))
    
    res.redirect('/')
})

cubeController.get('/:cubeId/details', async (req,res) => {

    const cube = await getOneCube(req.params.cubeId)
   
    
    res.render('details', {cube})

})




module.exports = cubeController