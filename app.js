const express = require('express');
const app = express();
const port = 3477;

app.get('/', (requisicao,resposta)=>{
    resposta.send("<h1>nodeJs é  javascript para back-end\n e também o melhor framework para trabalhar! :)</h1>");
    resposta.end();
}).listen(port);