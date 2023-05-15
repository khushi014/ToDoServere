import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();


app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));
// i have installed nodemon and add in start nodemon index.js rather than node index.js so that ...
 // if any changes is made in index.js it will rerun the index.js file
 // and we don't have to manually restart server by terminatiiing and then npm start rewrite