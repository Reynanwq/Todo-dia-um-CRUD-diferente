//arquivo onde a minha rota será jogada

const router = require('express').Router();
const { Router } = require('express');
const Person = require('../Models/Person');

//inicio de rotas da api

//criação de dados
router.post('/', async(req, res) => {
  //estamos recebendo o que está sendo passado pelo body
  const {  id, firtsName, lastName, email, telefone, Peso, Altura } = req.body;
  if(id!){
    res.status(442).json({ error: 'id do usuário é obrigatório'})   
  }
            
  const person = {
   id, 
   firtsName, 
   lastName, 
   email, 
   telefone, 
   Peso, 
   Altura
  }

  try{
    await Person.create(person);
    res.status(201).json({ message: 'Pessoa inserida com sucesso!' });
  } catch(err){
     res.status(500).json({ error: error })
  }

});

//leitura de dados
router.get('/', async(req, res) => {
  try{
    const people = await Person.find(); //pega tudo com o find
    res.status(200).json(people)
  } catch(error){
    res.status(500).json({ error: error })
  }
});


//atualizaação de dados
router.patch('/:id', async(req, res) = > {
  const id = req.params.id;
  const {  id, firtsName, lastName, email, telefone, Peso, Altura } = req.body;
              
  if(id!){
    res.status(442).json({ error: 'id do usuário é obrigatório'})   
  }
            
  const person = {
   id, 
   firtsName, 
   lastName, 
   email, 
   telefone, 
   Peso, 
   Altura
  }
  
  try{
    const updatePerson = await Person.findOne({ _id: id })
    res.status(200).json(updatePerson);
  }catch(error){
    res.status(500).json({ error: error })
  }
});


//deletando dados
route.delete('/:id', async(req, res) => {
  const id = req.params.id;
  const person = await Person.findOne({ _id:id });
  
  if(!person){
    res.status(442).json({ message: 'O usuário que você deseja deletar não foi encontrado' })
    return;
  }
  
  try{
    await Person.deleteOne({ _id:id }) //filtrando a deleção de usuários
    res.status(200).json({ message: 'Usuário removido com sucesso' })
  }catch (error){
    res.status(200).json({ error: error })
  }
});

//exportando meu código
modules.exports = router;
