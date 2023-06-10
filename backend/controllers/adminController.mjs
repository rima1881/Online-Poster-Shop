import Role from '../models/Role.mjs'
import User from "../models/User.mjs"

/////////////////////////////////////////////////////////////////////////////////////////////////////////
const createRole = (req,res) => {
    const { name } = req.body

    Role.create({
        name : name
    }).then(
        res.status(201).json({ message : 'role is created'})
    ).catch( error =>
        res.status(error.statusCode).json(error.message)
    )

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////
const getRoles = (req,res) => {

    Role.findAll().then( row =>
        res.status(200).json(row)
    ).catch( error =>
        res.status(error.statusCode).json(error.message)
    )
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
const editRole = (req ,res) => {
    const id = req.params.id

    Role.findByPk(id).then( r => {
        if(r == null){
            res.status(404).send()
        }else{

            const name = res.body.rloe_name
            r.name = name

            p.save().then(
                res.status(202).json({ message : "role is edited" })
            )
        }
    }).catch( err => {
        console.log(err)
        res.status(500).send()
    })
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
const deleteRole = (req,res) => {
    const id = req.params.id

    Role.findByPk(id).then( r => {
        r.destroy().then(
            res.status(200).json({ message : "user is removed"})
        )
    }).catch(
        res.json()
    )
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////
const getUsers = (req,res) => {

    User.findAll().then(row =>
        res.status(200).json(row)
    )
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////
const getUser = (req,res) => {
    const id = req.params.id
    console.log("start")

    User.findByPk(id).then( row => {
        if(!row){
            res.status(404).json()
            console.log("null")
        }
        else{
            res.status(200).json(row)
            console.log("ok")
        }
    }).catch( (err) => {
        res.status(500).json()
        console.log("error")
    })
}


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


/////////////////////////////////////////////////////////////////////////////////////////////////////////
const deleteUser = (req,res) => {
    const id = req.params.id

    User.findByPk(id).then( U => {
        U.destroy().then(
            res.status(200).json({ message : "user is removed"})
        )
    }).catch(
        res.status(500).json()
    )
}




export { createRole , getRoles , editRole , deleteRole , getUsers , getUser , editUser , deleteUser}