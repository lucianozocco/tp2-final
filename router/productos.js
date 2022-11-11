import express from 'express'
import ControladorProductos from '../controller/productos.js'

export class RouterProductos {
    constructor() {
        this.router = express.Router()
        this.controladorProductos = new ControladorProductos()
    }

    start() {
        
        //this.router.get('/calculo', this.controladorProductos.getCalculo)

        this.router.get('/:id?', this.controladorProductos.getProducto)

        this.router.post('/', this.controladorProductos.postProducto)

        this.router.put('/:id', this.controladorProductos.putProducto)

        this.router.delete('/:id', this.controladorProductos.deleteProducto)

        return this.router
    }
}
