import express from "express"
import bcrypt from "bcrypt"
import { json } from "sequelize"

const port = 8000

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.post("/login", (request, response) => {
    
    // A FAZER: Implementar rota de login
    // Requisitos:
    // A senha deve usar hash com bcrypt.
    // Essa rota deve retorna um json contendo o usuário e um token de sessão.
    // Utilizar o squelize.
    // Configurar um model, vulgo, uma tabela no squelize utilizando mysql contendo os seguintes campos:
    // NÃO PREICSA CRIAR MAIS NENHUMA TABELA.
    /*
        classId
        userTypeId
        email
        name
        image
        password
    */

    // Em caso de histeria, dúvida ou preocupações sobre a vida mundana favor contactar no discord: lonely9420
    // Terminei, não deu nada errado? mt obrigado, tenha um bom dia. Chama nois discord: lonely9420

    return response.json();
})

app.get('/', (request, response) => {
    return response.json({
        message: "Hello"
    })
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    
})