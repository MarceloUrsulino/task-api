const router = require('express').Router()
const UserController = require('../controllers/UserController')
const TaskController = require('../controllers/TaskController')

router.post('/users', UserController.UserAdd)
router.get('/users', UserController.userAll)
router.post('/tasks', TaskController.TaskAdd)
router.get('/tasks', TaskController.TaskAll)

module.exports = router