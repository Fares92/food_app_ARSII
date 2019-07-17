const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports =

    post = mongoose.model('Post', new Schema({
        title: {
            type: String,

        },
        date: {
            type: Date,
            default: Date.now
        },
        image: {
            type: String,


        },
        description: {
            type: String,
            required: false,
            minlength: 0,
            maxlength: 200
        },
        long: {
            type: String,
            required: false
        },
        lat: {

            type: String,
            required: false

        }


    }))