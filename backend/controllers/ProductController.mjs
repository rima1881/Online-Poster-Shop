import Product from "../models/Product.mjs";


const addProduct = (req,res) => {

    const { name , price } = req.body

    console.log(name + "\t" + price)

    Product.create({ 
        name : name,
        price : price
    })

    res.status(201).json({ message : "Product is added" })

}

const getProducts = (req,res) => {

    Product.findAll().then(model => {
        res.status(200).json(model)
    })
    
}

const getProduct = (req,res) => {
    const id = req.params.id

    Product.findByPk(id).then( p => {
        if(p == null){
            res.status(404).send()
        }
        else{
            res.status(200).json(p)
        }
    }).catch( error =>
        console.log(error)
    )

}

const editProduct = (req,res) => {
    const id = req.params.id

    Product.findByPk(id).then( p => {
        if(p == null){
            res.status(404).send()
        }else{
            const { name , price } = res.params 
            p.name = name
            p.price = price

            p.save().then(
                res.status(202).json({ message : "product is edited" })
            )
        }
    }).catch( err => {
        console.log(err)
        res.status(500).send()
    })
}

const removeProduct = (req,res) => {
    const id = req.params.id
    
    Product.findByPk(id).then( p => {
        if(p == null){
            res.status(404).send()
        }
        else{
            p.destroy().then(
                res.status(200).json({ message : "product is deleted"})
            )
        }
    }).catch( err =>
        console.log(err)
    )
}


export { addProduct , getProducts , getProduct , editProduct , removeProduct }