import {GetDefaultDrawings , GetDrawingGroup , addDrawingGroup} from "../controllers/drawingController.mjs"
import { Router } from "express"

const router = Router()


router.get( "/" ,  GetDefaultDrawings)
router.get( "/:id" , GetDrawingGroup)
//has to be removed *************************************************
router.post( "/add" , addDrawingGroup)


export default router