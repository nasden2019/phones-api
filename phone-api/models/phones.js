const mongoose = require('mongoose')
const Schemma = mongoose.Schema;

const PhoneSchema = new Schemma({
    name:{
        type: String,
        requiered: true,
    },
    manufacturer:{
        type: String,
        requiered: true,
    },
    description:{
        type: String,
        requiered: true,
    },
    color:{
        type: Array,
        requiered: true,
    },
    price:{
        type: Number,
        requiered: true,
    },
    screen:{
        type: String,
        requiered: true,
    },
    processor:{
        type: String,
        requiered: true,
    },
    ram:{
        type: String,
        requiered: true,
    },
    image:{
        type: String,
        requiered: true,
    }
    
})

module.exports = mongoose.model('Phones', PhoneSchema)