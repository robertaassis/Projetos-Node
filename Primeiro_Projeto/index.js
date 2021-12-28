// 1 comando mongo depois comando mongod para conectar ao mongodb
require('dotenv').config()
const express = require('express') 
const mongoose = require('mongoose')
const app = express()

const atendimentosRoutes= require('./controllers/atendimento')
app.use('/atendimentos', atendimentosRoutes) // sempre que chamar rota atendimentos, vai pegar do arquivo

mongoose.connect(process.env.DATABASE_STRING)
const db = mongoose.connection // tenta a conexao
db.on('error', (err) => console.log(err)) // caso a conexao dê erro
db.once('open', () => console.log('Connected to data base'))

app.listen(3000, () => console.log('servidor rodando na porta 3000'))


