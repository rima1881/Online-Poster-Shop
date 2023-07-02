import jwt from "jsonwebtoken"
import User from "../models/User.mjs";

const isAuth = async (req,res,next) => {
    const token = req.get("Authorization")

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

        console.log(decodedToken)

        const user = await User.findByPk(decodedToken.id)
        req.user = user

        console.log(user)
        next()

    }
    catch(error){

        if(!error.statusCode)
            error.statusCode = 500

        res.status(error.statusCode).json(error)
    }
}


export default isAuth