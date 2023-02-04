const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        String: true,
        required: true,
        unique: true,
    },
    password: {
        String: true,
        required: true
    }
})

userSchema.statics.signup =  async function(email, password) {

    if(!email || !password) {
        throw Error("Please fill all fields");
    }

    if(!validator.isEmail(email)) {
        throw Error("Please fill in valid email");
    }

    if(!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough');
    }

const exists = this.findOne({email});
if(exists) {
    throw Error("This email has already been registered");
}

const salt = await bcrypt.genSalt(10);
const hashed = await bcrypt.hash(password, salt);

const user = await this.create({email, password: hashed});

return user;

}


module.exports = mongoose.model('User', userSchema)
