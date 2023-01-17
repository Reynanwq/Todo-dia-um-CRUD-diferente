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

/* LER OS DADOS DO USUARIO PELO ID*/

router.get('/:id', async(req, res) => {
    const id = req.params.id; //pegando o que está sendo passado após a barrra
  try{
     const user = await Person.findOne({ _id : id }); //encontra apenas 1 resultado e ele deve ser igual o id da requisição
     if(!user){
        res.status(442).json({ message: 'O usuario não foi encontrado'});
        /* HTTP 442 
        O servidor entender o processo que está ocorrendo, mas não foi possível processar a instrução que estásendo passada
        */
        return;
     }
     res.status(200).json(user);
 } catch(error){
    res.status(500).json({ error: error })
  }
});


/* ATUALIZAR USUARIO */

router.patch('/:id', async(req, res) => {
    const id = req.params.id;
    const { name, email, salary, age, approveed } = req.body
    
    const person = {
        name,
        email,
        salary,
        age,
        approved
    }
    
    try{
        const updateUser = await Person.updateOne({ _id: id }, person);
        res.status(200).json(updateUser);
    }catch(error){
        res.status(500).json({ error : error })
    }
});


/* DELETE USUARIO */

router.delete('/:id', async(req, res) => {
    const id = req.params.id;
    //na requisição delete, primeiro é importante verificar s etem usuarios no nosso banco de dados.
    const usaers = await Person.find();
    if(!users){
        res.status(442).json({ message: 'O usuario não foi encontrado '});
        return;
    }
   try{
        const deleteUser = await Person.deleteOne({ _id: id });
        res.status(200).json({ message: 'usuario removido com sucesso' })
    }catch(error){
        res.status(500).json({ error: error})
    }
});


//adicionar a opção de deletar todos os usuarios em outra API

/* ----------------- ROTAS DA MINHA API FINAL ------------------- */

module.exports = router;
