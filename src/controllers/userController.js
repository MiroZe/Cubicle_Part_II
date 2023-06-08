const { register } = require('../services/userService');

const userController = require('express').Router();



userController.get('/register', (req,res) => {

    res.render('auth/register', {title: 'Register Page'})
})

userController.post('/register', async (req,res) => {

    
    try {
       

        if(Object.values(req.body).some(r=> r == '')) {
            throw new Error( 'All fields are mandatory')
        }

        if(req.body.password != req.body.repeatPassword) {
            throw new Error('Passwords mismatch!')
        }

      
        const token = await register(req.body.username,req.body.password)
        res.cookie('token', token);
        res.redirect('/')

        
    } catch (error) {
        res.render('auth/register', 
        {
            title: 'Register Page',
            errors: error.message
        })
    }

    
})






userController.get('/login' , async(req,res) => {

res.render('auth/login', {
    title:'Login Page'
})


})


userController.post('/login' , async(req,res) => {

    res.render('auth/login', {
        title:'Login Page'
    })


})
module.exports = userController