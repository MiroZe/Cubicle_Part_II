const express = require('express')
const expressConfig = require('./config/expressConfig')
const routesConfig = require('./config/routesConfig')



const app = express()


expressConfig(app)
routesConfig(app)






app.listen(3000, ()=> console.log('Server is listening on port 3000...'))