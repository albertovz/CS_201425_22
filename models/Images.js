import { getData } from './db.js';
import { DataTypes } from 'sequelize';

const Image = getData.sequelizeClient.define('tbl_images', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    image: {
        type: DataTypes.STRING,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export const getImage = Image;