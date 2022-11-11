import config from '../config.js'
import ProductosFactoryDAO from '../model/DAO/productosFactory.js'


class ApiProductos {
    constructor() {
        this.productosModel = ProductosFactoryDAO.devolverDAO(config.MODO_PERSISTENCIA)
    }

    obtenerProductos = async id => {
        return id? await this.productosModel.findProducto(id) : await this.productosModel.findProductos()
    }

    /* calcularNotas = async () => {
        return await this.productosModel.calculate();
    } */

    guardarProductos = async producto => {
        return await this.productosModel.saveProducto(producto)
    }

    actualizarProductos = async (producto,id) => {
        return await this.productosModel.updateProducto(producto,id)
    }

    eliminarProductos = async id => {
        return await this.productosModel.deleteProducto(id)
    }
}

export default ApiProductos