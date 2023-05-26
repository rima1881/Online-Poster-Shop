import { Router } from "express"
import { signup } from "../controllers/UserController.js"

const router = Router()

router.post("/signup" , signup)

export default router