const Cube = require("../models/Cube")



function getAllCubes() {

 return Cube.find({})

        
        
}

 function createCube(cubeData) {
   return  Cube.create(cubeData)
   
}

 function getOneCube(cubeId) {
 
     return Cube.findById(cubeId)   
        
    
}



module.exports = {
    getAllCubes,
    getOneCube,
    createCube
}