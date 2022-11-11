import config from '../config.js'
import RecetasFactoryDao from '../model/DAORecetas/recetasFactory.js'


class ApiRecetas {
    constructor() {
        this.recetasModel = RecetasFactoryDao.devolverDAO(config.MODO_PERSISTENCIA)
    }

    obtenerRecetas = async id => {
        return id? await this.recetasModel.findReceta(id) : await this.recetasModel.findRecetas()
    }

    calcularRecetas = async () => {
        return await this.recetasModel.calculate();
    } 

    guardarRecetas = async receta => {
        return await this.recetasModel.saveReceta(receta)
    }

    actualizarReceta = async (receta,id) => {
        return await this.recetasModel.updateReceta(receta,id)
    }

    eliminarRecetas = async id => {
        return await this.recetasModel.deleteReceta(id)
    }
}

export default ApiRecetas