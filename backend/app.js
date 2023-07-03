import express from "express"
import bodyparser from "body-parser"
import cors from "cors"
import sequelize from "./utils/sequelize.mjs"
import productRoutes from "./routes/ProductRoutes.mjs"
import authRoutes from "./routes/authRoutes.mjs"
import adminRoutes from "./routes/adminRoutes.mjs"
import drawingRoutes from "./routes/drawingRoutes.mjs"
import userRoutes from "./routes/userRoutes.mjs"
import setRelations from "./utils/dataRelations.mjs"
import initials from "./utils/initials.mjs"


/////////////////////////////////////////////////////////////////////////////////////////////////////////
const app = express()
const port = 5000

//Setting up CORS
app.use(cors({credentials:true ,origin: 'http://localhost:5173'}))

//app config
app.use(bodyparser.json())


/////////////////////////////////////////////////////////////////////////////////////////////////////////
//setting up the routes
app.use("/api/product", productRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/drawing",drawingRoutes)
app.use("/api/user", userRoutes)

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//make stored drawings viewable
app.use("/images" , express.static("images"))

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//setting up relations

setRelations()

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//connecting to db
//has to be changed before release *******************************************************************
sequelize.sync().then( () => {

    //create admin
    initials()

    //setting up the port
    app.listen(port)

}).catch(error =>
    console.log(error)
)