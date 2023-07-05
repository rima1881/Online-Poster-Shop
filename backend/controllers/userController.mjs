import Product from "../models/Product.mjs"
import Drawing from "../models/Drawing.mjs"

/////////////////////////////////////////////////////////////////////////////////////////////////
const getCart = async (req,res) => {

    const cart = await req.user.getCart()

    const items = await cart.getCartItems()

    const mappedItems = await items.map(async i => {

        const drawing = await i.getDrawing()
        const product = await i.getProduct()


        return { id : i.id , name : `${drawing.name} - ${product.name}` , price : product.price * i.quantity}
    })

    Promise.all(mappedItems).then( result => {
        res.status(200).json(result)
    })
}


/////////////////////////////////////////////////////////////////////////////////////////////////
const addToCart = async (req,res) => {


    const { quantity , productId , drawingId} = req.body

    console.log(productId)

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

        const item = await cart.createCartItem({ quantity : quantity , productId : productId , drawingId : drawingId})

        res.status(201).json({ message : "Item is added"})
    }
    catch(error){

        if(!error.statusCode)
            error.statusCode = 500

        res.status(error.statusCode).json(error)
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////

const deleteCartItem = (req,res) => {
    const {id} = req.parrams
    const user = req.user

    user.getCart.then(cart => {
        cart.deleteCartItem({where : { id : id}}).then(
            res.status(202).json({message : "item is deleted"})
        )
    })
}

/////////////////////////////////////////////////////////////////////////////////////////////////

const deleteCart = (req,res) => {

}

////////////////////////////////////////////////////////////////////////////////////////////////

const getOrders = (req,res) => {
    
}

/////////////////////////////////////////////////////////////////////////////////////////////////
const getOrder = (req,res) => {

}

/////////////////////////////////////////////////////////////////////////////////////////////////
const addOrder = (req,res) => {

}

export { addToCart , getCart , deleteCartItem}