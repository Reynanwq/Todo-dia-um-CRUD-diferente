import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.status(200).send('Hello typescript')
});

//Criar usuário

router.post("/", async(req, res) => {
     const { name, age, email} = req.body;
      if(!name){
       res.status(442).json ({ message: 'O nome de usuário não existe'})
      }
       Const person = {
       name,
       age
       email,
     }
      try{
       await Person.create(person);
       res.status(200).json({ message: 'usuário criado com sucesso'})
      }catch(error){
      res.status(500).Json({ error: error })
     }
});

router.get("/", async(req, res) => {
     try {
      
     }catch(error){
      res.status(500).Json({ error: error })
     }
});


router.patch("/", async(req, res) => {
     try {
      
     }catch(error){
      res.status(500).Json({ error: error })
     }
});

router.delete("/", async(req, res) => {
     try {
      
     }catch(error){
      res.status(500).Json({ error: error })
     }
});
