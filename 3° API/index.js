require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Person = require('./models/Person');
const DB_USERNAME = process.env.MONAGODB_USERNAME;
const DB_PASSWORD = process.env.MONAGODB_PASSWORD;
app.use(express.json());

app.use(
    //diz qual biblioteca o express deve utilizar, "extended: true" diz que vai utilizar a biblioteca "qs"
    //pesquisar sobre a biblioteca "qs"
    express.urlencoded({
        extended: true,
    }),
)

//conectando ao mongoDB
mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@secondday.bynihww.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log('Conectando ao mongoDB');
})
.catch((err) => console.log(err))

//conectando ao routes
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes); //todos recebem o '/person'

//endpoitn
app.get('/home', (req, res) => {
    res.status(200).json({ message: 'Hello Express' })
});

const port = 3000;
app.listen(port, () => console.log(`servidor rodando na porta ${port}`));