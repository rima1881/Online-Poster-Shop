import { Router } from "express"
import { GetPoster, GetPosters } from "../controllers/PostersController.js"
const router = Router()


router.get("/posters/:id", GetPoster)
router.get("/posters" , GetPosters)

export default router