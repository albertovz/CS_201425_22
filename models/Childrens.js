import { getData } from './db.js';
import { DataTypes } from 'sequelize';

const Children = getData.sequelizeClient.define('tbl_childrendb', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    second_surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.SMALLINT,
        allowNull: false,
    },
    id_node: {
        type: DataTypes.SMALLINT,
        allowNull: false,
    },
}, {
    tableName: 'tbl_childrendb',
    freezeTableName: true
});



export const getChildren = Children;