import express from 'express';
import { api } from './config/config.js';

import cors from 'cors';

const app = express();


app.use(cors());

// ROUTERS
app.use('/api_v1/user', user);

// SERVIDOR ACTIVO
app.listen(api.port, () => {
    console.log('Api escuchando en el puerto ', api.port);
})


//1. Modificar la app (sync)
// para que las tablas no
// vuelva a crear, solo actualizar
// 2. Relación registro -> Padre -> Hijos
// 3. Modelo de imágenes
// 4. Nginx ec2 _> AWS