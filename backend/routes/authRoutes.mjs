import { Router } from "express"
import { signup ,login , refresh } from "../controllers/authController.mjs"

const router = Router()


router.put("/signup", signup)
router.post("/login", login)
router.post("/refresh",refresh)

export default router