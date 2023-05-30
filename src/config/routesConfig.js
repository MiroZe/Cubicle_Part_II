const accessoryController = require('../controllers/accesoryController')
const cubeController = require('../controllers/cubeController')
const homeController = require('../controllers/homeController')





const routesConfig = (app) => {

    app.use('/', homeController)
    app.use('/cube', cubeController)
    app.use('/accesories',accessoryController)
    app.get('*', (req,res) => {
        res.redirect('/404')
    })
  
}


module.exports = routesConfig