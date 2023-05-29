import { Router } from "express"
import { addProduct , getProducts , getProduct , editProduct , removeProduct } from "../controllers/ProductController.mjs";

const router = Router()

router.get("/",getProducts)
router.get("/:id", getProduct)
router.post("/",addProduct)
router.put("/:id",editProduct)
router.delete("/:id",removeProduct)

export default router