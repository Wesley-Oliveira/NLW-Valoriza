import express, { request } from "express";

// @types/express
const app = express();

/**
 * GET -> Buscar uma informação
 * POST -> Inserir/criar uma informação
 * PUT -> Alterar uma informação
 * DELETE -> Remover um dado
 * PATCH -> Alterar uma informação específica
 */

app.get("/test", (request, response) => {
    // Request -> Entrada
    // Response -> Saída
    return response.send("NLW 6!");
})

app.post("/test-post", (request, response) => {
    return response.send("Olá NLW POST!")
});

// http://localhost:3000
app.listen(3000, () => {
    console.log("Server is running!");
})