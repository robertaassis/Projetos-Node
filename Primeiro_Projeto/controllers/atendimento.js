const express = require('express')
const app = express()
const bodyParser= require('body-parser')// body-parser consegue manipular bem o body de uma req (post)

app.use(bodyParser.urlencoded({extended:true})) // usando POST - Body - x-www-form-urlencoded; precisa ser nessa forma pois estou usando urlencoded
app.get('/', (req,res)=>{
    res.send('entrou na porta 3000')
})
app.post('/', (req, res)=>{
    console.log(req.body)
    res.send('você está na rota de atendimentos e realizando post')
})
module.exports = app
