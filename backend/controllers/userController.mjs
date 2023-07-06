import Product from "../models/Product.mjs"
import Drawing from "../models/Drawing.mjs"
import CartItems from "../models/CartItem.mjs"

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

        await cart.createCartItem({ quantity : quantity , productId : productId , drawingId : drawingId})

        res.status(201).json({ message : "Item is added"})
    }
    catch(error){

        if(!error.statusCode)
            error.statusCode = 500

        res.status(error.statusCode).json(error)
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////

const deleteCartItem = async (req,res) => {

    const {id} = req.params
    const user = req.user

    try{
        
        const cart = await user.getCart()

        const item = await cart.getCartItems({where : { id : id}})

        if(!item){
            const error = new Error("item not found")
            error.statusCode = 404
            throw error
        }

        await CartItems.destroy({where : { id : id}})

        res.status(202).json({message : "item is deleted"})
    }
    catch(err){
        if(!err.statusCode)
            err.statusCode = 500

        res.status(err.statusCode).json(err)
    }

    
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