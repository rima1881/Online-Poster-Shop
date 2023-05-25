import express from "express"
import posterRoutes from "./routes/PostersRoutes.js"
import cors from "cors"

const app = express()
const port = 5000

app.use(cors())
app.use('/api',posterRoutes)

app.listen(port)