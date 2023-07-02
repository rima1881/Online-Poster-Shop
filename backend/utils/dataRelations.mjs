import Role from "../models/Role.mjs"
import User from "../models/User.mjs"
import UserRole from "../models/UserRole.mjs"
import Drawing from "../models/Drawing.mjs"
import DrawingGroup from "../models/DrawingGroup.mjs"
import OrderItem from "../models/OrderItem.mjs"
import CartItem from "../models/CartItem.mjs"
import Product from "../models/Product.mjs"
import Cart from "../models/Cart.mjs"
import Order from "../models/Order.mjs"


const setRelations = () => {


    User.belongsToMany(Role , { through : UserRole})
    Role.belongsToMany(User, { through: UserRole})

    Drawing.hasMany(OrderItem)
    OrderItem.belongsTo(Drawing)


    CartItem.belongsTo(Drawing)
    Drawing.hasMany(CartItem)


    OrderItem.belongsTo(Product)
    Product.hasMany(OrderItem)

    CartItem.belongsTo(Product)
    Product.hasMany(CartItem)

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


    DrawingGroup.belongsTo(User)
    User.hasMany(DrawingGroup)
}


export default setRelations