import Product from "../models/Product.mjs"
import Drawing from "../models/Drawing.mjs"

/////////////////////////////////////////////////////////////////////////////////////////////////
const getCart = async (req,res) => {

    const cart = await req.user.getCart()
    res.status(200).json(cart.getCartItems())

}


/////////////////////////////////////////////////////////////////////////////////////////////////
const addToCart = async (req,res) => {

    console.log(req)


    const { quantity , productId , drawingId} = req.body

    console.log(req.body)

    try{

        //Check Product Id
        const product = Product.findByPk(productId)
        if(!product)
        {
            const error = new Error("Product not found!!!");
            error.statusCode = 404
            throw error
        }

        //Check Drawing Id
        const drawing = Drawing.findByPk(drawingId)
        if(!drawing)
        {
            const error = new Error("Drawing not found!!!")
            error.statusCode = 404
            throw error
        }

        //fetching UserCart
        const cart = await (req.user.getCart())

        const item = await cart.createCartItem({ quantity : quantity})
        item.setProduct(product)
        item.setDrawing(drawing)

        res.status(201).json({ message : "Item is added"})
    }
    catch(error){

        if(!error.statusCode)
            error.statusCode = 500

        res.status(error.statusCode).json(error)
    }
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