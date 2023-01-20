//importe tudo como a várivel express da lib expresse presente em node modules

import * as express from 'express'; 
import * as cors from 'cors';
import * as logger from 'morgan'; //loger facilitar o uso dos métodos do crud
import { router } from './routes/index';
export const app = express();

//os app use
app.use(express.json()) //essa parte sempre deve está, pois faclita o uso da leitura do json
app.use(cors()); //pesquisar sobre
app.use(logger('dev')); //dev é do meu packge.json
app.use('/', router);

//basicamente importações e permissões para o uso
