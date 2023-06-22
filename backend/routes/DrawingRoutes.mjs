import { Router } from "express";
import { GetDrawings , GetDrawing , AddDrawing , EditDrawing , RemoveDrawing } from "../controllers/DrawingController.mjs";

const router = Router()


router.get("/", GetDrawings)
router.get("/:id", GetDrawing)
router.post("/add",AddDrawing)
router.put("/Edit", EditDrawing)
router.delete("/remove", RemoveDrawing)


export default router