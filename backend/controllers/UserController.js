const User = require('../models/User')

module.exports = class UserController{
    static async UserAdd (req, res){
        const { name, email} = req.body
        
        if(!name || !email){
            res.status(422).json({message: 'O campo precisa ser preenchido'})
            return
        }
        // CRIAR
        const userCreate = await User.create({
            name,
            email
        })
        res.status(201).json({message: ` Seu nome e email foi adicionado`})
    }
        //LISTAR
    static async userAll(req,res){
        const users = await User.findAll()
        res.status(200).json(users)
    }
}