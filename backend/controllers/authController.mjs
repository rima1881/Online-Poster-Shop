import bcrypt from 'bcryptjs'
import User from '../models/User.mjs'
import jwt from "jsonwebtoken"
import Role from '../models/Role.mjs'

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
            name: name,
            include: [Role]
        })

        //create token
        const token = jwt.sign({
            email : user.email,
            id : user.id
        }, 'asdgfl,jityhjktiomdlaasdhowwhypleasedonthackmealjkcmsdjkcnsjdklnvljdsvnknfd;iuvdfj', { expiresIn : "2h"})
            
        await user.createCart()


        //has to be fixed ******************************************************
        res.status(201).json({token : token , cart})

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

        const user = await User.findOne({where : {email : email} , attributes : [ 'name' , 'email' , 'pwd']})

        console.log(user)

        //check email
        if(!user){
            const error = new Error("really no user with this data was found!!!")
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
            email : user.email,
            id : user.id
        }, 'asdgfl,jityhjktiomdlaasdhowwhypleasedonthackmealjkcmsdjkcnsjdklnvljdsvnknfd;iuvdfj', { expiresIn : "2h"})

        //has to be fixed *****************************************
        res.status(200).json({token : token})

    }
    catch(error){


        //unkown error
        if(!error.statusCode)
            error.statusCode = 500
    
        res.status(error.statusCode).json({error : error.message})
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////
//has to be fixed ******************************************************************
const refresh = async (req,res) => {
    try{
        res.status(200).json({message : "i got you"})
    }
    catch(error){

        //unkown error
        if(!error.statusCode)
            error.statusCode = 500
        
        res.status(error.statusCode).json({error : error.message})
    }
}

export { signup ,login , refresh }