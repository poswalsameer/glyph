import { Router } from "express"
import { generateIconController } from "../controllers/generate-icon.controller"

const router = Router()

router.post('/', (req, res) => generateIconController(req, res))

export default router