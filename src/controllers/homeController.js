const { getAllCubes } = require('../services/cubeService');

const homeController = require('express').Router();



homeController.get('/', async (req,res) => {
    const queries = {search :req.query.search, from:Number(req.query.from),to:Number(req.query.to)}
    
    const cubes =  await getAllCubes(queries)
    
    
    res.render('home', {cubes, queries})
})

homeController.get('/about', (req,res) => {

    res.render('about')
})

homeController.get('/404', (req,res) => {

    res.render('404')
})


module.exports = homeController
