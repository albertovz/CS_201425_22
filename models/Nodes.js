import { getData } from './db.js';
import { DataTypes } from 'sequelize';
import { getChildren } from './Childrens.js';

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
    }
}, {
    tableName: 'tbl_nodedb',
    freezeTableName: true
});

Node.hasMany(getChildren, {
    as: 'Hijos: ',
    foreignKey: 'nodeId'
});
getChildren.belongsTo(Node, {
    as: 'node'
})

export const getNode = Node;