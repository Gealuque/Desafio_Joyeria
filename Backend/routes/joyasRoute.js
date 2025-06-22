import { Router } from 'express'
import { getAllJoyasHateoas, getFiltradoJoyas, getPaginadoJoyas } from '../src/Controllers/joyasController.js'

const router = Router()

// router.get('/joyas', getAllJoyasHateoas)
router.get('/joyas', getAllJoyasHateoas)
router.get('/joyas/filtros', getFiltradoJoyas)

export default router
