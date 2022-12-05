const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const port = 3477;
const mysql = require('mysql2');
const connect = require('./conexao.js');


 // Pegando os Times da Tabela Campeonato, que foi criado no banco de dados
app.get('/times', (req, res) =>{
res.setHeader("Access-Control-Allow-Origin","*");
res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
return connect.execSQLQuery('select * from times', res);
}).listen(port);

//Atualizando os times.

app.put('/times/:id', (req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
return connect.execSQLQuery("update campeonato set nome='"+req.body.nome+"' where id="+req.params.id, res);
})


app.post('/times/:id', (req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("insert into campeonato (nome) value('"+req.body.nome+"')",res);
})

app.delete('/clientes/:id',(req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
return connect.execSQLQuery("delete from campeonato where id="+ req.params.id, res);
})