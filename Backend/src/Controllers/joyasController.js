import HATEOAS from "../../helpers/hateoas";
import { getAllJoyasHateoasModel } from "../Modells/joyasModel";

//HATEOAS

export const getAllJoyasHateoas = async(req,res) => {
    try {
        const allJoyas = await getAllJoyasHateoasModel()
        const allJoyasHateoas = await HATEOAS(joyas, allJoyas)
        res.status(200).json({ joya: allJoyasHateoas })
    } catch (error) {
        res.json({ error: 'Error al Obtener el Inventario'})
        console.error('Error al procesar la solicitud:', error)
    }
}