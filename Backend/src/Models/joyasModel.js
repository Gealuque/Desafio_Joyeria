import pool from '../../config.js'

// HATEOAS
export const getAllJoyasHateoasModel = async () => {
  const allJoyas = await pool.query('SELECT * FROM inventario')
  return allJoyas.rows
}
