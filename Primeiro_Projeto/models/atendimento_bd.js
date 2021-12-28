
const mongoose = require('mongoose')

const atendimentoSchema = new mongoose.Schema({ // estrutura que vai pro mongo
    userName:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        required:false,
        default: 0
    },
    occupation:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Atendimento', atendimentoSchema)