import { Router } from "express"
import { addToCart } from "../controllers/userController.mjs"

const router = Router()

router.post("/cart" , addToCart)

export default router