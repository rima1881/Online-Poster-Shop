import express from "express"
import bodyparser from "body-parser"
import cors from "cors"
import sequelize from "./utils/sequelize.mjs"
import productRoutes from "./routes/ProductRoutes.mjs"
import authRoutes from "./routes/authRoutes.mjs"
import User from "./models/User.mjs"
import Role from "./models/Role.mjs"
import ProductType from "./models/Product.mjs"
import Drawing from "./models/Drawing.mjs"
import Order from "./models/Order.mjs"
import DrawingGroup from "./models/DrawingGroup.mjs"
import Cart from "./models/Cart.mjs"
import OrderItem from "./models/OrderItem.mjs"
import CartItem from "./models/CartItem.mjs"


const app = express()
const port = 5000

//Setting up CORS
app.use(cors())

//app config
app.use(bodyparser.json())

//setting up the routes
app.use("/api/Product", productRoutes)
app.use("/api/auth", authRoutes)



//database config
//setting up relations
Role.hasMany(User)
User.hasOne(Role)

Drawing.hasMany(OrderItem)
OrderItem.hasOne(Drawing)

CartItem.hasOne(Drawing)
Drawing.hasMany(CartItem)

OrderItem.hasOne(ProductType)
ProductType.hasMany(OrderItem)

CartItem.hasOne(ProductType)
ProductType.hasMany(CartItem)

Order.belongsTo(User)
User.hasMany(Order)

Order.hasMany(OrderItem)
OrderItem.belongsTo(Order)

User.hasOne(Cart)
Cart.belongsTo(User)

Cart.hasMany(CartItem)
CartItem.belongsTo(Cart)

Drawing.belongsTo(DrawingGroup)
DrawingGroup.hasMany(Drawing)



//connecting to db
//has to be changed before release
sequelize.sync( { force : true }).then(
    app.listen(port)
).catch(error =>
    console.log(error)
)