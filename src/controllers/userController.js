const userController = require('express').Router();


userController.get('/login' , async(req,res) => {

res.render('auth/login', {
    title:'Login Page'
})

})



module.exports = userController