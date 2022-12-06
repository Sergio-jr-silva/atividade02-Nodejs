const express = require('express');
const app = express();
const port = 3477;

app.get(("/"), (req,res)=>{
        res.send("<h1>Trabalhando com nodeJs pela Primeira vez</h1>");
        res.end();
}).listen(port);


