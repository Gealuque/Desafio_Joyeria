import { Router } from 'express'
import { getAllJoyasHateoas } from '../src/Controllers/joyasController.js'

const router = Router()

router.get('/joyas_with_hateoas', getAllJoyasHateoas)

export default router
