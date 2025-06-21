import { Router } from 'express'
import { getAllJoyasHateoas, getFiltradoJoyas, getPaginadoJoyas } from '../src/Controllers/joyasController.js'

const router = Router()

router.get('/joyas_hateoas', getAllJoyasHateoas)
router.get('/joyas_paginada', getPaginadoJoyas)
router.get('/joyas_filtradas', getFiltradoJoyas)

export default router
