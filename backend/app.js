import express from "express"
import posterRoutes from "./routes/PostersRoutes.js"
import userRoutes from "./routes/UserRoutes.js"
import drawingRoutes from "./routes/DrawingRoutes.mjs"
import bodyparser from "body-parser"
import cors from "cors"

const app = express()
const port = 5000

//Setting up CORS
app.use(cors())

//app config
app.use(bodyparser.json())


//Routes
app.use('/api/poster',posterRoutes)
app.use("/api/auth",userRoutes)
app.use('/api/drawing', drawingRoutes )


app.listen(port)