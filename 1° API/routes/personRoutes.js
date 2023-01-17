/* ----------------- ROTAS DA MINHA API INICIO ------------------- */
const router = require('express').Router();
const { Router } = require('express');
const Person = require('../models/Person');
/* CRIAR USUARIO */

router.post('/', async(req, res) => {
    const { name, email, salary, age, approveed } = req.body //requisição de cada método
    if (!name) {
        res.status(442).json({ error: 'O nome é obrigatório' })
    }
    const person = {
        name,
        email,
        salary,
        age,
        approveed
    }
    try {
        await Person.create(person)
        res.status(201).json({ message: 'pessoa inserida com sucesso' })
    } catch (error) {
        res.status(500).json({ error: error })
    }
});

/* LER DADOS DAS PESSOAS USUARIO */

router.get('/', async(req, res) => {
    try{
  const users =  await Person.find() //usar o método fin{}
  res.status(200).json(users); //minha resposta são os usuários que eu peguei
    } catch(error){
        res.status(500).json({ error: error })
    }
});


/* ATUALIZAR USUARIO */

/* DELETE USUARIO */

/* ----------------- ROTAS DA MINHA API FINAL ------------------- */

module.exports = router;
