const router = require('express').Router();
const { Router } = require('express');
const Person = require('../Models/Dog');

//criando - metodo para criar dados é o POST
router.post('/', async(req, res) => {
   const {id, firstName, lastName, Age, dog_breed, height} = req.body;
    if(!id){
      res.status(442).json({ message: 'Usuario não encontrado' })
    }
    const dog = {
      id,
      firstName, 
      lastName, 
      Age, 
      dog_breed, 
      height
    }
  
  try{
   const people = Person.create(dog);
    res.status(200).json({ message: 'Usuario doguinho criado com sucesso!' })
  }catch(erro){
    res.status(500).json({ error: error })
  }
});

//lendo - metodo para ler dados é o GET

router.get('/', async(req, res) => {
  try{
    const people = await Person.find();
    res.status(200).json(people);
  }catch(erro){
    res.status(500).json({ error: error })
  }
});

//atualizando - metodo para atualizar dadoos é o PATCH
router.patch('/:id', async(req, res) => {
  const id = req.params.id;
  const {id, firstName, lastName, Age, dog_breed, height} = req.body;
  
  if(!firstName){
    res.status(442).json({ message: 'Não foi possivel encontrar o Doguinho' })
  }
  const dog = {
      id,
      firstName, 
      lastName, 
      Age, 
      dog_breed, 
      height
    }
  try{
     const updateDog = await Person.updateOne({ _id:id });
     res.status(200).json(updateDog);
  }catch(erro){
    res.status(500).json({ error: error })
  }
});

//deletando - o metodo utilizado para deletar dados dos usuarios é o DELETE
router.delete('/:id', async(req, res) => {
  
   const id = req.params.id = req.body;
   const person = await Person.findOne({ _id:id })
   
   if(!person){
      res.status(442).json({ message: 'Não foi possivel encontrar usuario '})     
    }
  
  try{
    await Person.deleteOne({ _id: id });
    res.status(200).json({ message: 'Usuario removido com sucesso' })
  }catch(erro){
    res.status(500).json({ error: error })
  }
});

modules.exports = Person;
