import express from "express";

const app = express();

// Principais métodos do express()
/*
GET      => Buscar informação
POST     => Inserir informação
PUT      => Alterar uma informação
DELETE   => Remover uma informação
PATCH    => Alterar uma informação específica
*/

// fazer um get na rota /test
app.get("/test", (request, response) => {
    // Request => Informação entrando
    // Response => Resposta (saída)

    return response.send("Hello world")
})

app.post("/test-post", (request, response) => {
    return response.send("Teste de post")
})

// roda uma localhost na porta 3000 (primeiro parâmetro)
app.listen(3000, () => console.log("server is running"))
