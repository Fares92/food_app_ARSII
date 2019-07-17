const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports =

    user = mongoose.model('user', new Schema({
        username: {
            type: String,

        },
        email: {
            type: String,

        },
        password: {
            type: String,


        },
        phone: {
            type: String,
            required: false,
            minlength: 0,
            maxlength: 200
        }


    }))