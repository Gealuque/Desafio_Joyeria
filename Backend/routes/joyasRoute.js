import { Router } from 'express'
import { getFiltradoJoyas, getPaginadoJoyasHateoas } from '../src/Controllers/joyasController.js'

const router = Router()

router.get('/joyas', getPaginadoJoyasHateoas)
router.get('/joyas/filtros', getFiltradoJoyas)

export default router
