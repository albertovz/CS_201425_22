import { getData } from './db.js';
import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

const User = getData.sequelizeClient.define('tbl_usersdb', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // last_name: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    // email: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     unique: {
    //         arg: true,
    //         msg: ''
    //     },
    // },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // phone_number:  {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     unique: {
    //         arg: true,
    //         msg: ''
    //     },
    // },


}, {
    tableName: 'tbl_usersdb',
    freezeTableName: true,
    hooks: {
        beforeCreate: (user, options) => {
            {
                user.password = user.password && user.password != "" ? bcrypt.hashSync(user.password, 10) : "";
            }
        },
        beforeCreate: (user, options) => {
            {
                user.password = user.password && user.password != "" ? bcrypt.hashSync(user.password, 10) : "";
            }
        }
    }

});



export const getUser = User;