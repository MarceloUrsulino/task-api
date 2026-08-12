const Task = require('../models/Task')
const User = require('../models/User')

module.exports = class TaskController{
    static async TaskAdd(req,res){
        const {title, userId} = req.body

        if(!title){
            res.status(422).json({message: 'O campo precisa ser preenchido.'})
            return
        }
        const useridCheck = await User.findByPk(userId)
        if(!useridCheck){
            res.status(422).json({message: 'Usuário não encontrado.'})
            return
        }

        //CRIAR
        const TaskCreate = await Task.create({
            title,
            userId
        })
        res.status(201).json({message: `A tarefa ${title} foi criada.`})
    }

    //LISTAR
    static async TaskAll(req,res){
        const tasks = await Task.findAll()
        res.status(200).json(tasks)
    }
}