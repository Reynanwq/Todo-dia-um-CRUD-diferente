const router = require('express').Router();
const { Router } = require('express');
const Person = require('../models/Person');

//CRIAR DADOS USUARIOS
router.post('/', async(req, res) => {
    const { name, age, approved } = req.body; //O QUE FOI DIGITADO EU PEGUEI
    if(!name){
        res.status(442).json({ error: 'O Usuario não foi encontrado' })
    }

    const person = {
        name,
        age,
        approved,
    }
    try {
        await Person.create(person) //criar usuario que foi digitado
        res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso'})
    } catch (error) {
        res.status(500).json({ error: error });
    }
});
//LER DADOS DOS USUARIOS
router.get('/', async(req, res) => {
    try {
        const people = await Person.find()
        res.status(200).json(people);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});
//ATUALIZAR DADOS USUARIOS
router.patch('/:id', async(req, res) => {
    const id = req.params.id;
    const { name, age, approved} = req.body;
    const person = {
        name,  
        age,
        approved,
    }
    try {
        const updateUser = await Person.updateOne({ _id:id }, person);
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});
//DELETAR USUARIO
router.delete('/:id', async(req, res) => {
    const id = req.params.id;
    const user = await Person.findOne({ _id:id });
    if(!user){
        res.status(442).json({ error: 'Usuario não foi enontrado' });
    }
    try {
     await Person.deleteOne({ _id:id });
     res.status(200).json({ message: 'usuario deletado om sucesso' });   
    } catch (error) {
        res.status(500).json({ error: error });
    }
});
//DELETAR TODOS OS USUARIOS
router.delete('/', async(req, res) => {
    const users = await Person.find();
    if(!users){
        res.status(442).json({ error: 'Usuarios não foram encontrados' });
    }
    try {
        await Person.delete();
        res.status(200).json({ message: 'todos os usuarios foram deletados' })
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

modules.exports = router;
