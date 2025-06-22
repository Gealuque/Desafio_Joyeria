import HATEOAS from "../../helpers/hateoas.js";
import {
  getAllJoyasHateoasModel,
  getFiltradoJoyasModel,
  getPaginadoJoyasModel,
} from "../Models/joyasModel.js";

// All-HATEOAS

export const getAllJoyasHateoas = async (req, res) => {
  try {
    const allJoyas = await getAllJoyasHateoasModel();
    const allJoyasHateoas = await HATEOAS("joyas", allJoyas);
    res.status(200).json({ allJoyasHateoas });
  } catch (error) {
    res.json({ error: "Error al Obtener el Inventario" });
    console.error("Error al procesar la solicitud:", error);
  }
};

// Paginado-Limit-Ordenado-HATEOAS

export const getPaginadoJoyasHateoas = async (req, res) => {
  try {
    const { orderby, limit, page } = req.query;
    const joyas = await getPaginadoJoyasModel({ orderby, limit, page });
    const joyasHateoas = await HATEOAS("joyas", joyas);
    res.status(200).json({ joyasHateoas });
  } catch (error) {
    res.json({ error: "Error al Obtener y Ordenar las Joyas" });
    console.error("Error al procesar la solicitud:", error);
  }
};

// Get con Filtros

export const getFiltradoJoyas = async (req, res) => {
  try {
    const { precio_max, precio_min, categoria, metal } = req.query;
    const joyas = await getFiltradoJoyasModel({
      precio_max,
      precio_min,
      categoria,
      metal,
    });
    res.status(200).json({ joyas });
  } catch (error) {
    console.error("Error al procesar la petición", error);
    res.status(500).json({ error: "Error al realizar filtros" });
  }
};
