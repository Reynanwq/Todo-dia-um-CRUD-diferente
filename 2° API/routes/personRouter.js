/* INCIO MINHA API */
const router = require(express).Router();
const { Router } = require('express'); 
const Person = require('../models/Person');


/* CRIAR USER
para criar, tuilizamos o método POST
*/

router.post('/', async(req, res) => {
    const { name, email, age } = req.body;
    if(!name){
        res.status(442).json({ error: 'O nome é obrigatório'})
    }
    const user = { //descrição do user
        name,
        email, 
        age
    }
    try {
        await Person.create(user);
        res.status(201).json({ message: 'Usuario inserido com sucesso' });
    } catch (error) {
        res.status(500).json({ error:error });
    }
});

/* LER DADOS E MANDAR PARA DATABAS */

router.get('/', async(req, res) => {
    try {
        const users = await Person.find();
        res.status(201).json(users);
    } catch (error) {
        res.status(500).json({ error:error });
    }
});

/* ATUAZIZAR USUARIO PELO ID */

router.patch('/:id', async(req, res) => {
    const id = req.params.id;
    const { name, email, age} = req.body;
    const user = {
        name, 
        email,
        age,
    }
    try {
        const updateUser = await Person.updateOne({ _id: id }, user);
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ error:error });
    }
    
});

/* DELETAR USUARIO PELO ID */

router.delete('/:id', async(req, res) => {
    const id = req.params.id;
    const person = await Person.findOne({ _id:id });
    if(!person){
        res.status(442).json({ message: 'usuario não encontrado'})
    }
    try {
        await Person.deleteOne({ _id:id });
        res.status(201).json({ message: 'usuario removido com sucesso '})
    } catch (error) {
        res.status(500).json({ error:error });
    }
});

/* DELETAR TODOS OS USUARIOS */

router.delete('/', async(req, res) => {
    const users = await Person.find();
    if(!users){
        res.status(442).json({ message: 'usuarios não foram encontrados'});
    }
    try {
        await Person.delete();
        res.status(201).json({ message: 'Todos os usuarios foram removidos com sucesso'})
    } catch (error) {
        res.status(500).json({ error:error });
    }
});

/* FINAL MINHA API */
module.exports = router;