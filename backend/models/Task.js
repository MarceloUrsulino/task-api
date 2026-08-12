const { DataTypes } = require('sequelize')
const db = require('../db/conn')


const task = db.define('Task', {
  

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
    },
})

module.exports = task

