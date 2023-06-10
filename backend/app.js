import express from "express"
import bodyparser from "body-parser"
import cors from "cors"
import sequelize from "./utils/sequelize.mjs"
import productRoutes from "./routes/ProductRoutes.mjs"
import authRoutes from "./routes/authRoutes.mjs"
import drawingRoutes from "./routes/DrawingRoutes.mjs"
import adminRoutes from "./routes/adminRoutes.mjs"
import User from "./models/User.mjs"
import Role from "./models/Role.mjs"
import ProductType from "./models/Product.mjs"
import Drawing from "./models/Drawing.mjs"
import Order from "./models/Order.mjs"
import DrawingGroup from "./models/DrawingGroup.mjs"
import Cart from "./models/Cart.mjs"
import OrderItem from "./models/OrderItem.mjs"
import CartItem from "./models/CartItem.mjs"


/////////////////////////////////////////////////////////////////////////////////////////////////////////
const app = express()
const port = 5000

//Setting up CORS
app.use(cors())

//app config
app.use(bodyparser.json())


/////////////////////////////////////////////////////////////////////////////////////////////////////////
//setting up the routes
app.use("/api/Product", productRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/drawing", drawingRoutes)
app.use("/api/admin", adminRoutes)


/////////////////////////////////////////////////////////////////////////////////////////////////////////
//database config
//setting up relations
Role.hasMany(User)
User.belongsTo(Role)

Drawing.hasMany(OrderItem)
OrderItem.belongsTo(Drawing)


CartItem.belongsTo(Drawing)
Drawing.hasMany(CartItem)


OrderItem.belongsTo(ProductType)
ProductType.hasMany(OrderItem)

CartItem.belongsTo(ProductType)
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



/////////////////////////////////////////////////////////////////////////////////////////////////////////
//connecting to db
//has to be changed before release
sequelize.sync().then(
    app.listen(port)
).catch(error =>
    console.log(error)
)