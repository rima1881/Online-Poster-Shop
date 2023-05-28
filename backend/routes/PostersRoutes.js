import { Router } from "express"
import { GetPoster, GetPosters , AddPoster ,EditPoster , RemovePoster} from "../controllers/PostersController.js"
const router = Router()


router.get("/" , GetPosters)
router.get("/:id", GetPoster)
router.post("/add", AddPoster)
router.put("/edit" ,EditPoster)
router.delete("/remove",RemovePoster)


export default router