const User = require('../models/User')

const signupUser = async (req, res) => {
const {email, password} = req.body;
try {
    const user = await User.signup(email, password);
    res.status(200).json({email, user})
} 
catch (error) {
    res.status(400).json({error: error.message})
}
}

const loginUser = (req, res) => {
    res.json({mssg: "Login"})
}

module.exports = {signupUser, loginUser}
