import { Router } from 'express'
import { getAllJoyasHateoas, getPaginadoJoyas } from '../src/Controllers/joyasController.js'

const router = Router()

router.get('/joyas_hateoas', getAllJoyasHateoas)
router.get('/joyas_paginada', getPaginadoJoyas)

export default router
