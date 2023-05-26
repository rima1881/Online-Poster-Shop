import { Router } from "express"
import { GetPoster, GetPosters } from "../controllers/PostersController.js"
const router = Router()


router.get("/posters/1", GetPoster)
router.get("/posters" , GetPosters)

export default router