import ApiRecetas from '../api/recetas.js'

class ControladorRecetas {

    constructor() {
        this.apiRecetas = new ApiRecetas()
    }

    getCalculo = async (req,res) => {
        res.json( await this.apiRecetas.calcularRecetas() )
    }

    getReceta = async (req,res) => {
        const id = req.params.id;
        res.json( await this.apiRecetas.obtenerRecetas(id) )
    }

    postReceta = async (req,res) => {
        const receta = req.body
        await this.apiRecetas.guardarRecetas(receta)
        //res.status(200)
        //res.json("{status: ‘ok’}");
        //res.json(await this.apiAlumnos.guardarAlumno(alumno))
        res.redirect('/')
    }

    putReceta = async (req,res) => {
        const { id } = req.params
        const receta = req.body
    
        res.json(await this.apiRecetas.actualizarReceta(receta,id))
    }

    deleteReceta = async (req,res) => {
        const { id } = req.params
    
        res.json(await this.apiRecetas.eliminarRecetas(id))
    }
}

export default ControladorRecetas