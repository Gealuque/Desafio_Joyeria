import pool from '../../config.js'
import format from 'pg-format'

// HATEOAS
const getAllJoyasHateoasModel = async () => {
  const sqlQuery = { text: 'SELECT * FROM inventario' }
  const resultado = await pool.query(sqlQuery)
  console.log(resultado.rows)
  return resultado.rows
}

// Paginado-Limit-Ordenado

const getPaginadoJoyasModel = async ({ orderby = 'stock_ASC', limit = 3, page = 1 }) => {
  const [attribute, direction] = orderby.split('_')
  const offset = (page - 1) * limit
  const sqlQueryFormat = format(
    'SELECT * FROM inventario ORDER BY %I %s LIMIT %L OFFSET %L',
    attribute,
    direction,
    limit,
    offset
  )
  const response = await pool.query(sqlQueryFormat)
  return response.rows
}

export { getAllJoyasHateoasModel, getPaginadoJoyasModel }
