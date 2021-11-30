const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {}

// define table columns and configuration
User.init(
    {
        //TABLE COLUMN DEFINITIONS GO HERE
    },
    {
        // TABLE CONFIGURATION OPTIONS GO HERE
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'user'
    }
);

module.exports = User;