const User = require('../models/User')
const Task = require('../models/Task')

User.hasMany(Task, {foreignKey: 'userId'})
Task.belongsTo(User, {foreignKey: 'userId'})