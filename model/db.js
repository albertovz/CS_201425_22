import pkg from 'pg';
import { db } from '../config.js';
import Sequelize from 'sequelize';
const { Pool } = pkg;

async function getConnection() {
    const client = new Pool({
        user: db.user,
        host: db.host,
        database: db.database,
        password: db.password,
        port: db.port
    });
    await client.connect();
    return client;
}

const sequelizeClient = new Sequelize (db.database, db.user, db.password, {
    host : db.host,
    dialect: 'postgres',
});

sequelizeClient.authenticate()
.then(() => {
    console.log('Conectado');
})
.catch(() => {
    console.log('No se conectó');
});

export const getData = { getConnection, sequelizeClient };