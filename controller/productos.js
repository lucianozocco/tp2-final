import ApiProductos from '../api/productos.js'

class ControladorProductos {

    constructor() {
        this.apiProductos = new ApiProductos()
    }

   /*  getCalculo = async (req,res) => {
        res.json( await this.apiRecetas.calcularRecetas() )
    } */

    getProducto = async (req,res) => {
        const id = req.params.id;
        res.json( await this.apiProductos.obtenerProductos(id) )
    }

    postProducto = async (req,res) => {
        const producto = req.body
        await this.apiProductos.guardarProductos(producto)
        //res.status(200)
        //res.json("{status: ‘ok’}");
        //res.json(await this.apiAlumnos.guardarAlumno(alumno))
        res.redirect('/')
    }

    putProducto = async (req,res) => {
        const { id } = req.params
        const producto = req.body
    
        res.json(await this.apiProductos.actualizarProductos(producto,id))
    }

    deleteProducto = async (req,res) => {
        const { id } = req.params
    
        res.json(await this.apiProductos.eliminarProductos(id))
    }
}

export default ControladorProductos