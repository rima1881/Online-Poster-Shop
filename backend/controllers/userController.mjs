import Cart from "../models/Cart.mjs"
import CartItem from "../models/CartItem.mjs"
import User from "../models/User.mjs"

/////////////////////////////////////////////////////////////////////////////////////////////////
const getCart = (req,res) => {

}

//has to be fixed **************************************************************
/////////////////////////////////////////////////////////////////////////////////////////////////
const addToCart = async (req,res) => {
    const { productId , quantity } = req.body

    //has to be fixed *****************************************************************

    try{
        if(!req.user){
            const error = new Error("unAtorized")
            error.statusCode = 404
            throw error
        }
    }
    catch (error) {

        //unknown error
        if(!error.statusCode)
            error.statusCode = 500

        res.status(error.statusCode).json(error)
    }
    
    res.status(200).json({cart})
}

/////////////////////////////////////////////////////////////////////////////////////////////////
const getOrders = (req,res) => {
    
}

/////////////////////////////////////////////////////////////////////////////////////////////////
const getOrder = (req,res) => {

}

/////////////////////////////////////////////////////////////////////////////////////////////////
const addOrder = (req,res) => {

}

export { addToCart}