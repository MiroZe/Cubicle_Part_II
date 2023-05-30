const {Schema,model, Types} = require('mongoose')



const cubeSchema = new Schema({
    name : {type:String, required: true},
    description : {type:String, required: true},
    imageUrl : {type:String, required: true},
    difficultyLevel : {type:Number, required: true},
    accesories : {Types:Objectid, ref: 'Accesory'}
})


const Cube = model('Cube', cubeSchema);

module.export = Cube