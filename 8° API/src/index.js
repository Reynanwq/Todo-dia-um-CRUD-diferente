const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());

const cursos = ['FullStack Master', 'Desenvolvimento de Games', 'Viver de Youtube'];

//retorna um curso especifico
app.get('/curso/:index', (req, res) => {
    const { index } = req.params;
    res.status(200).json(cursos[index]);
});

//retorna todos os cursos
app.get('/cursos', (req, res) => {
    res.status(200).json(cursos);
});

//criar um novo curso
app.post('/cursos', (req, res) => {
    const { name } = req.body; //recebe apenas o nome do curso
    cursos.push(name); //sobe o nome do curso para o cursos
    res.status(200).json(cursos);
});

//atualizar os cursos - alguma alteração
app.patch('/cursos/:index', (req, res)=> {
    const { index } = req.params;
    const { name } = req.body;
    cursos[index] = name;
    res.status(200).json(cursos);
});

//deletar um usuario
app.delete('/cursos/:index', (req, res) => {
    
});

app.listen(port, () => console.log('Server running'));