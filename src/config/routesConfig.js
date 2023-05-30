const cubeController = require('../controllers/cubeConreoller')
const homeController = require('../controllers/homeController')





const routesConfig = (app) => {

    app.use('/', homeController)
    app.use('/cube', cubeController)
    app.get('*', (req,res) => {
        res.redirect('/404')
    })
  
}


module.exports = routesConfig