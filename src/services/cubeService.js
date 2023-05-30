const Cube = require("../models/Cube")




async function getAllCubes(queries) {

  return Cube.find().lean()
        
        
}

 function createCube(cubeData) {
   return  Cube.create(cubeData)
   
}

async function getOneCube(cubeId) {
    try {
        const result = await fs.readFile(filePath, 'utf-8')
        const found = JSON.parse(result)
        return found.find(c => c.id == cubeId); 
        
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    getAllCubes,
    getOneCube,
    createCube
}