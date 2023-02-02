const router = require('express').Router();
const { Router } = require('express');
const Person = require('../Models/Cat');

router.post('/', async(req, res) => {
  const {id, firstName, lastName, cat_breed,age, weight, height} = req.body;
  
  if(!firstName){
    res.status(442).json({ message: 'Usuario não foi encontrado' })  
  }
  
  const cat = {
    id,
    firstName,
    lastName,
    cat_breed,
    age,
    weight,
    height
  }
  
  try{
    const cats = await Person.create(cat);
    res.status(200).json({ message: 'Gatinho criado com sucesso!' })
  } catch(error){
    res.status(500).json({ error: error })
  }
});


router.get('/', async(req, res) => {
  try{
    cont people = await Person.find() ;  
    res.status(200).json(people)
  } catch(error){
    res.status(500).json({ error: error })
  }
});


router.patch('/:id', async(req, res) => {
  const id = req.params.id;
  const {id, firstName, lastName, cat_breed,age, weight, height} = req.body;
  
  if(!firstName){
    res.status(442).json({ message: 'Usuario não foi encontrado' })  
  }
  
  const cat = {
    id,
    firstName,
    lastName,
    cat_breed,
    age,
    weight,
    height
  }
  try{
    const updateCat = await Person.updateOne({ _id: id }, cat);    
    res.status(200).json(cat)
  } catch(error){
    res.status(500).json({ error: error })
  }
});


router.delete('/:id', async(req, res) => {
  const id = req.params.id;
  const person = await Person.findOne({ _id: id });
  if(!person){
    res.status(442).json({ message: 'Usuario gatinho não foi encontrado' })
  }
  try{
    await Person.deleteOne({ _id: id })
    res.status(200).json({ message: 'Usuario gatinho removido com sucesso' })
  } catch(error){
    res.status(500).json({ error: error })
  }
});

modules.exports = Person;
