const CustomAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');


const login = async(req, res) => {
    const {username, password} = req.body;
    const authHeader = req.headers.authorization;
    console.log(req.headers.authorization)
    if(!authHeader || !authHeader.startWith('Bearer ')){
        throw new CustomAPIError("Please provide email and password", 400)
    }

    const id = new Date().getDate();
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn : '30d'})

    

    if(!username || !password){
        throw new CustomAPIError("Please provide email and password", 400)
    }
    res.status(200).json({
        success : true,
        msg : "User created",
        token
    })
}


const dashBoard = async(req, res) => {
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({
        success : true,
        msg : `Here is your Lucky Number ${luckyNumber}`
    })
}


module.exports = {
    login,
    dashBoard
}