const Accessory = require("../models/Accessory");

 


 function getAllAccesories () {

    return Accessory.find()

 }

  function createAccesory(name, description, imageUrl){

    Accessory.create({name, description, imageUrl})
 }


 


 module.exports = {
    getAllAccesories,
    createAccesory
 }