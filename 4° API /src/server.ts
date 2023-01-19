/* ------------------- RESPONSAVEL PÓR STARTAR O SERVIDOR ---------------*/

/* ------------------- CONFIGURAÇÃO DO SERVIDOR O SERVIDOR ---------------*/

import { app } from './app';

const port = process.env.PORT || 3000; //vai pegar a porta que eu botei no .env ou 3000, já evita aquele tipo de erro

const server = app.listen(port, () => console.log(`APP ouvindo na porta ${port}`)); //saber que a aplicação subiu

//INTERRUPÇÃO EXPLICITA DO APP, PARA FECHAR PARA VALER

process.on('SIGINT', () => {
    server.close();
    console.log('Aaplicação foi interrompida!');
});