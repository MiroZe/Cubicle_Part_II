const { error } = require('console')
const fs = require('fs/promises')

const path = require('path')
const filePath = path.resolve(__dirname, '..', 'data', 'db.json')



async function getAllCubes(queries) {

    try {
        const result = await fs.readFile(filePath, 'utf-8')
        let cubes =  JSON.parse(result.slice())
        if(queries.search) {
           
            cubes = cubes.filter(c => c.name.toLowerCase().includes(queries.search.toLowerCase()))
        }

        if(queries.from) {
           
            cubes = cubes.filter(c => c.difficultyLevel >= queries.from)
        }
        if(queries.to) {
           
            cubes = cubes.filter(c => c.difficultyLevel <= queries.to)
        }

        return cubes

    } catch (error) {
        console.log(error)
    }
}

async function saveCubes(cubes) {
    try {
        await fs.writeFile(filePath, cubes)


    } catch (error) {
        console.log(error)
    }
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
    saveCubes,
    getOneCube
}