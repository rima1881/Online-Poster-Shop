import { createRole , getRoles , deleteRole , editRole , getUser , getUsers , editUser , deleteUser } from "../controllers/adminController.mjs"
import { Router } from "express"

const router = Router()

router.get("/role",getRoles)
router.post("/role", createRole)
router.delete("/role/:id", deleteRole)
router.post("/role/:id", editRole)

router.get("/user/:id", getUser)
router.get("/user", getUsers)
router.put("/user/:id", editUser)
router.delete("/user/:id", deleteUser)


export default router