const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    termsCheckbox: {
        type: String,
    }
})

module.exports = mongoose.model('User', UserSchema)