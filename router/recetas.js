import express from 'express'
import ControladorRecetas from '../controller/recetas.js'

export class RouterRecetas {
    constructor() {
        this.router = express.Router()
        this.controladorRecetas = new ControladorRecetas()
    }

    start() {
        
        //this.router.get('/calculo', this.controladorRecetas.getCalculo)

        this.router.get('/:id?', this.controladorRecetas.getReceta)

        this.router.post('/', this.controladorRecetas.postReceta)

        this.router.put('/:id', this.controladorRecetas.putReceta)

        this.router.delete('/:id', this.controladorRecetas.deleteReceta)

        return this.router
    }
}
