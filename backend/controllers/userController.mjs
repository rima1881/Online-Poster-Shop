import Cart from "../models/Cart.mjs"
import CartItem from "../models/CartItem.mjs"
import User from "../models/User.mjs"

/////////////////////////////////////////////////////////////////////////////////////////////////
const getCart = async (req,res) => {

    const cart = await req.user.getCart()
    res.status(200).json(cart.getCartItems())

}


/////////////////////////////////////////////////////////////////////////////////////////////////
const addToCart = async (req,res) => {


    const { quantity , productId , drawingId} = req.body
    const cart = await (req.user.getCart())

    await cart.createCartItem({ quantity : quantity , productId : productId , drawingId : drawingId })
    const Items = await cart.getCartItems()

    res.status(201).json(Items)
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

export { addToCart , getCart}