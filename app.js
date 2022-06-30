import express from 'express';
import { api } from './config/config.js';
import user from './router/user.js';
import node from './router/node.js';
import child from './router/child.js';
import image from './router/image.js'

import cors from 'cors';

const app = express();


app.use(cors());

// ROUTERS
app.use('/api_v1/user', user);
app.use('/api_v1/node', node);
app.use('/api_v1/child', child);
app.use('/api_v1/image', image);

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

// crear archivo Dockerfile:

// FROM node:16
// WORKDIR /c/Users/SMYRNA/Documents/CS/CS_201425_22


// COPY package*.json ./

// COPY . .

// EXPOSE 3000

// CMD ["node", "app.js"]

// crear archivo .dockerignore

// node_modules
// npm-debug.log

// docker build . -t alberto/api-node
// docker images
// docker exec -it 53f65b007c26 /bin/bash ESTE YA NO HDSPTM
// docker run -p 80:3000 -d 201425/api-node
// crear instancia de postgres
// psql -h localhost -p 5432 -U postgres
// \l (mostrar bases de datos)