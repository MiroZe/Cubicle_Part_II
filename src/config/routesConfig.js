const accessoryController = require('../controllers/accessoryController')
const cubeController = require('../controllers/cubeController')
const homeController = require('../controllers/homeController')





const routesConfig = (app) => {

    app.use('/', homeController)
    app.use('/cube', cubeController)
    app.use('/accessories',accessoryController)
    app.get('*', (req,res) => {
        res.redirect('/404')
    })
  
}


module.exports = routesConfig