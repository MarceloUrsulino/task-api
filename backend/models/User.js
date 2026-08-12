const { DataTypes } = require('sequelize')
const db = require('../db/conn')


const user = db.define('User', {
  

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

module.exports = user