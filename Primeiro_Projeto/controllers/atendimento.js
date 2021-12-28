const express = require('express')
const app = express()
const bodyParser= require('body-parser')// body-parser consegue manipular bem o body de uma req (post)
const Atendimento = require('../models/atendimento_bd')

app.use(bodyParser.json()) // usando POST - Body - x-www-form-urlencoded; precisa ser nessa forma pois estou usando urlencoded

// rotas
app.get('/', async(req,res)=>{
    try{
        const todosAtendentes = await Atendimento.find() // procura no banco (SELECT * FROM Atendimentos)
        res.json(todosAtendentes) // devolve o que encontrou
    } catch(error){
        res.status(500).json({message: error.message})
    }
})

app.post('/', async(req, res)=>{
    const atendimentos_post = new Atendimento({
        userName: req.body.userName,
        age: req.body.age,
        occupation: req.body.occupation
    })
    try{
        const newAtendimento = await atendimentos_post.save()
        res.status(201).json(newAtendimento)
    } catch(error){
        res.status(400).json({message: error.message})
    }

    console.log('você está na rota de atendimentos e realizando post')
})

app.patch('/:id', (req, res) =>{
    // if(req.body.userName!=null) res.Atendimento.userName = req.body.userName
    // if(req.body.age!=null) res.Atendimento.age = req.body.age
})
module.exports = app
