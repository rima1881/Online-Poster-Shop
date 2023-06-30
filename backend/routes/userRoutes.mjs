import { Router } from "express"
import { addToCart , getCart} from "../controllers/userController.mjs"
import isAuth from "../middleware/isAuth.mjs"

const router = Router()

router.post("/cart" , isAuth ,addToCart)
router.get("/cart" , isAuth , getCart)
router.get("/",isAuth , (req,res) => { res.status(200).json({m : "hello world"})})

export default router