import HATEOAS from '../../helpers/hateoas.js'
import { getAllJoyasHateoasModel, getPaginadoJoyasModel } from '../Models/joyasModel.js'

// HATEOAS

export const getAllJoyasHateoas = async (req, res) => {
  try {
    const allJoyas = await getAllJoyasHateoasModel()
    const allJoyasHateoas = await HATEOAS('joyas', allJoyas)
    res.status(200).json({ allJoyasHateoas })
  } catch (error) {
    res.json({ error: 'Error al Obtener el Inventario' })
    console.error('Error al procesar la solicitud:', error)
  }
}

// Paginado-Limit-Ordenado

export const getPaginadoJoyas = async (req, res) => {
  try {
    const { orderby, limit, page } = req.query
    const joyas = await getPaginadoJoyasModel({ orderby, limit, page })
    res.status(200).json({ joyas })
  } catch (error) {
    res.json({ error: 'Error al Obtener y Ordenar las Joyas' })
    console.error('Error al procesar la solicitud:', error)
  }
}
