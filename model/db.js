import { db } from '../config.js';
import Sequelize from 'sequelize';

const sequelizeClient = new Sequelize (db.database, db.user, db.password, {
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false,
    //     },
    // },
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

export const getData = { sequelizeClient };