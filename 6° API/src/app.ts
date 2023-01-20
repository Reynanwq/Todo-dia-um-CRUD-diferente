import * as express from 'express';
import * as cors from 'cors';
import * as logger from 'morgan';
import { router } from './routes/index';
export const app = express();

app.use(express.json());
app.use(cors());
app.use(logger('dev')); //do packge.json
app.use('/', router);