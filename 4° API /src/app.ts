import * as express from 'express'; //importando o express com tudo que está lá dentro
import * as cors from 'cors'; //padrao dew importação typescript
import * as logger from 'morgan';
import { router } from './routes/index';

//exportar o meu app
export const app = express();

app.use(express.json());

app.use(cors());

app.use(logger('dev')); //No loguer aparec todas as requisições que foram utilizadas na minha API

/* ------------- com essas aplicações, eu estou abrindo todas as portas -------- */

//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s


//INTEGRA O ENDPOINT NA APLICACÇÃO

app.use('/', router)