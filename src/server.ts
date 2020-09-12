import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import database from './database';
import { Request, Response } from 'express';
import routes from './routes';

const PORT = process.env.PORT || 5000;

const app: express.Express = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

database.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', async (req: Request, res: Response) => {
    return res.status(200).send('Backend - Transporte Universitário');
})

app.use('/api', routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
