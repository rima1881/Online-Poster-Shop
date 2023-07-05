import { Router } from "express"
import { addToCart , getCart , deleteCartItem} from "../controllers/userController.mjs"
import isAuth from "../middleware/isAuth.mjs"

const router = Router()

router.post("/cart" , isAuth ,addToCart)
router.get("/cart" , isAuth , getCart)
router.delete("/cart", isAuth , deleteCartItem)
router.get("/",isAuth , (req,res) => { res.status(200).json({m : "hello world"})})

export default router