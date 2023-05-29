import { Router } from "express"
import { signup ,login } from "../controllers/authController.mjs"

const router = Router()


router.put("/signup", signup)
router.post("/login", login)

export default router