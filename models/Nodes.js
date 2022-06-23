import { getData } from './db.js';
import { DataTypes } from 'sequelize';

const Node = getData.sequelizeClient.define('tbl_nodedb', {
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
    id_user: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    }
}, {
    tableName: 'tbl_nodedb',
    freezeTableName: true
});



export const getUser = Node;