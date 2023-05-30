const express = require('express');
const handlebars = require('express-handlebars');



const expressConfig = (app) => {
    app.use(express.urlencoded({extended:false}))
    app.engine('hbs', handlebars.engine({
        extname: 'hbs'
    }))
    app.set('view engine', 'hbs');
    app.set('views', 'src/views')
    app.use(express.static('src/public'))


}


module.exports = expressConfig