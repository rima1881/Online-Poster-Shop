import bcrypt from 'bcryptjs'
import User from '../models/User.mjs'
import jwt from "jsonwebtoken"

const signup = (req,res) => {
    const { email , pwd , name} = req.body

    bcrypt.hash(pwd,12).then(hasedpass => {
        User.create({
            email : email,
            pwd: hasedpass,
            name: name
        }).then( result =>{
            res.status(201).json({message : "user is created" , id : result._id})
        })


    }).catch(error => {
        if(!error.statusCode)
            error.statusCode = 500
        throw error
    })
}



const login = (req,res) => {
    const { email , pwd} = req.body
    let user

    User.findOne({email : email}).then( u => {
        if(!u){
            const error = new Error("really no user with this data was found!!!")
            error.statusCode = 401
            throw error
        }
        user = u
        return bcrypt.compare(pwd,u.pwd)
    })
    .then(isEqual => {
        if(!isEqual){
            const error = new Error("no user with this data was found!!!")
            error.status = 401
            throw error
        }
        const token = jwt.sign({
            email : user.email,
            id : user.id
        }, 'asdgfl,jityhjktiomdlaasdhowwhypleasedonthackmealjkcmsdjkcnsjdklnvljdsvnknfd;iuvdfj', { expiresIn : "2h"})

        res.status(200).json({token : token, userId : user.id})
    })
    
    .catch(error =>{
        if(!error.statusCode)
            error.statusCode = 500
        throw error
    })
}


export { signup ,login }