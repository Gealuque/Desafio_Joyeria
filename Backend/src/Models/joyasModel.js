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

// GET con Filtros

const getFiltradoJoyasModel = async ({ precio_max, precio_min, categoria, metal }) => {
  const filtros = []
  const valores = []

  if (precio_max) {
    filtros.push('precio <= %L')
    valores.push(precio_max)
  }
  if (precio_min) {
    filtros.push('precio >= %L')
    valores.push(precio_min)
  }
  if (categoria) {
    filtros.push('categoria = %L')
    valores.push(categoria)
  }
  if (metal) {
    filtros.push('metal = %L')
    valores.push(metal)
  }
  let sqlQuery = 'SELECT * FROM inventario'
  if (filtros.length > 0) {
    const sqlWhere = format(' WHERE ' + filtros.join(' AND '), ...valores)
    sqlQuery += sqlWhere
  }

  const resultado = await pool.query(sqlQuery)
  return resultado.rows
}

export { getAllJoyasHateoasModel, getPaginadoJoyasModel, getFiltradoJoyasModel }
