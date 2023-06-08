const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwtSign = require('../utils.js/jwt')

const JWT_SECRET = 'ffgwet9809798hjhjkfhajs'



async function login() {


}

async function register(username, password) {
    const existingUsername = await User.findOne({username}).collation({locale:'en', strength:2}) 
    if(existingUsername) {
        throw new Error('Username is already taken')
    }
    const hashedPassword = await bcrypt.hash(password, 9)
    const user = await User.create( {
        username,
        hashedPassword
    })

    
    return createToken(user)

}


async function createToken({_id,username}) {

    const payload = {
        _id,username
    }
    
 return jwtSign(payload,JWT_SECRET)
  


}



module.exports = {
    login,
    register
}