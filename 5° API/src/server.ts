//configurações do servidor

import { app } from './app'; //pegar exportações do app
const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log('Server online'));

//finzalizar o processo de verdade

process.on('SIGINT', () => {
    server.close();
    console.log('A aplicação foi interrompida!')
}); //pesquisar sobre o sigint
