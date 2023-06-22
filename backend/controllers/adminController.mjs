import Role from '../models/Role.mjs'
import User from "../models/User.mjs"


//updated
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const createRole = async (req,res) => {

    try{
        const { name } = req.body
        await Role.create({
            name : name
        })
    
        return res.status(201).json({ message : 'role is created'})
    }
    catch(error){

        if(!error.statusCode)
            error.statusCode = 500

        return res.status(error.statusCode).json({ error : error.message })
    }

}

//updated
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const getRoles = (req,res) => {

    Role.findAll().then( row =>
        res.status(200).json(row)
    ).catch( error => {

        if(!error.statusCode)
            error.statusCode = 500

        res.status(error.statusCode).json({ error : error.message})

    })
}

//updated
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const editRole = async (req ,res) => {

    try{
        const id = req.params.id

        const role = await Role.findByPk(id)

        //check the id
        if(!role){
            const error = new error("there is no such role")
            error.statusCode = 404
            throw error
        }


        const name = res.body.role_name
        role.name = name

        await p.save()

        return  res.status(202).json({ message : "role is edited" })

    }
    catch(error) {

        if(!error.statusCode)
            error.statusCode = 500

        return res.status(error.statusCode).json({ error : error.statusCode})
    }
}

//updated
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const deleteRole = async (req,res) => {

    try{
        const id = req.params.id

        const role = await Role.findByPk(id)

        if(!role){
            const error = new error("there is no such role")
            error.statusCode = 404
            throw error
        }

        await r.destroy()

        return res.status(200).json({ message : "user is removed"})
    }
    catch (error) {

        if(!error.statusCode)
            error.statusCode = 500

        return res.status(error.statusCode).json({ error : error.message })

    }
}

//updated
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const getUsers =  (req,res) => {

    User.findAll({ include : [Role] , attributes : ['name','email'] }).then(row =>
        res.status(200).json(row)
    ).catch((error => {

        if(!error.statusCode)
            error.statusCode = 500

        res.status(error.statusCode).json({ error : error.message})

    }))
}

//updated
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const getUser = async (req,res) => {

    try{

        const id = req.params.id
        const user = await User.findByPk(id , { include: [Role] , attributes : ['name','email','pic','addr1','addr2','post']})

        if(!user){
            const error = new Error("no such user was found")
            error.statusCode = 404
            throw error
        }

        console.log(user.role.name)
        return res.status(200).json(user)

    }
    catch(error) {

        //unkown error
        if(!error.statusCode)
            error.statusCode = 500

        return res.status(error.statusCode).json(error.message)
    }
}

//updated
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const editUser = async (req,res) => {

    const id = req.params.id
    const role_id = req.body.role_id

    try{

        const u = await User.findByPk(id)

        //check if user id was right
        if(!u){
            const error = new Error("no user with this data was found!!!")
            error.statusCode = 401
            throw error
        }

        r = await Role.findByPk(role_id)

        //check if role id was right
        if(!r){
            const error = new Error("no role with this data was found!!!")
            error.statusCode = 401
            throw error
        }

        u.update( { roleId : r.id })
        u.save()
        res.status(202).json({ message : "user was updated"})

    }
    catch(error){
        
        //unkown error
        if(!error.statusCode)
            error.statusCode = 500
    
        res.status(error.statusCode).json({error : error.message})
    }
}

//updated
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const deleteUser = async (req,res) => {

    try{
        const id = req.params.id

        const user = await User.findByPk(id)

        if(!user){
            const error = new Error("no such user was found")
            error.statusCode = 404
            throw error
        }

        user.destroy().then(
            res.status(200).json({ message : "user is removed"})
        )
    }
    catch(error) {

        //unkown error
        if(!error.statusCode)
            error.statusCode = 500
        
        res.status(error.statusCode).json({ error : error.message})
    }
}




export { createRole , getRoles , editRole , deleteRole , getUsers , getUser , editUser , deleteUser}