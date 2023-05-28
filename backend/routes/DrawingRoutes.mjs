import { Router } from "express";
import { GetDrawings } from "../controllers/DrawingController.mjs";

const router = Router()

router.get("/", GetDrawings)


export default router