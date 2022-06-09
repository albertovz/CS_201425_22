import express from 'express';
import config from '../config.js';
import user from './components/user/network.js';

import cors from 'cors';

const app = express();


app.use(cors());

// ROUTERS
app.use('/api_v1/user', user);

// SERVIDOR ACTIVO
app.listen(config.port, () => {
    console.log('Api escuchando en el puerto ', config.port);
})