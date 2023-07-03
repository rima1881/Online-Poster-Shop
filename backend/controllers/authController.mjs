import bcrypt from 'bcryptjs'
import User from '../models/User.mjs'
import jwt from "jsonwebtoken"
import Role from '../models/Role.mjs'
import UserRole from '../models/UserRole.mjs'

/////////////////////////////////////////////////////////////////////////////////////////////////
const signup = async (req,res) => {

    try{

        const { email , pwd , name} = req.body

        //hashing password
        const hasedpass = await bcrypt.hash(pwd,12)

        //add user to db
        const user = await User.create({
            email : email,
            pwd: hasedpass,
            name: name
        })

        //create token
        const token = jwt.sign({
            id : user.id.toString()
        }, 'asdgfl,jityhjktiomdlaasdhowwhypleasedonthackmealjkcmsdjkcnsjdklnvljdsvnknfd;iuvdfj', { expiresIn : "2h"})
            
        const cart = await user.createCart()

        Role.findByPk(2).then(role => {
            user.addRole(role , { through : UserRole})
        })

        //has to be fixed ******************************************************
        //role has to be added
        res.status(201).json({token : token , cart , roles : [2]})

    }
    catch(error) {
        if(!error.statusCode)
            error.statusCode = 500

        res.status(error.statusCode).json({error : error.message})
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////
const login = async (req,res) => {
    const { email , pwd } = req.body

    try{

        const user = await User.findOne({where : {email : email} , attributes : [ 'id' , 'name' , 'email' , 'pwd']})

        //check email
        if(!user){
            const error = new Error("no user with this data was found!!!")
            error.statusCode = 401
            throw error
        }

        //check password
        const isEqual = await bcrypt.compare(pwd,user.pwd)
        if(!isEqual){
            const error = new Error("no user with this data was found!!!")
            error.statusCode = 401
            throw error
        }


        //creating token
        const token = jwt.sign({
            id : user.id.toString()
        }, 'asdgfl,jityhjktiomdlaasdhowwhypleasedonthackmealjkcmsdjkcnsjdklnvljdsvnknfd;iuvdfj', { expiresIn : "2h"})



        const roles = await user.getRoles( {attributes : ["id"]} )
        const cart = user.getCart()




        //role has to be added
        res.status(200).json({token : token , cart : cart , roles : roles.map(role => role.id)})

    }
    catch(error){


        //unkown error
        if(!error.statusCode)
            error.statusCode = 500
    
        res.status(error.statusCode).json({error : error.message})
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////
const refresh = async (req,res) => {

    const { token } = req.body


    try{

        if(!token){
            const error = new Error("Not authenticated.")
            error.statusCode = 401
            throw error
        }


        const decodedToken = jwt.verify(token , "asdgfl,jityhjktiomdlaasdhowwhypleasedonthackmealjkcmsdjkcnsjdklnvljdsvnknfd;iuvdfj")   

        if(!decodedToken){
            const error = new Error("Not authenticated.")
            error.statusCode = 401
            throw error
        }

        const id = decodedToken.id
        const user = await User.findByPk(id)


        console.log(user)

        const roles = await user.getRoles( {attributes : ["id"]} )
        const cart = user.getCart()

        res.status(200).json({cart : cart , roles : roles.map(role => role.id)})

    }
    catch(error){

        //unkown error
        if(!error.statusCode)
            error.statusCode = 500
        
        res.status(error.statusCode).json({error : error.message})
    }
}

export { signup ,login , refresh }