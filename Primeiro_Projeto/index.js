const express = require('express') 

const app = express()
const atendimentosRoutes= require('./controllers/atendimentos')
app.use('/atendimentos', atendimentosRoutes)
app.listen(3000, () => console.log('servidor rodando na porta 3000'))