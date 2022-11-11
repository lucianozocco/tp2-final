import ConectMongoDB from '../DB.js'
import { ObjectId } from "mongodb"


class ProductosMongoDAO {

    findProducto = async id => {
        if(!ConectMongoDB.connection) return {}
        let producto = await ConectMongoDB.db.collection('productos').findOne({_id: ObjectId(id)})
        return producto;    
    }

    findProductos = async ()  => {
        if(!ConectMongoDB.connection) return []
        try {
            let productos = await ConectMongoDB.db.collection('productos').find({}).toArray()
            return productos
        }
        catch {
            return []
        }
    }

    //Cálculo de promedio
 /*    calculate = async () => {
        if(!ConectMongoDB.connection) return {}
        let cantNotas = await ConectMongoDB.db.collection('productos').countDocuments({})
        let productos = await ConectMongoDB.db.collection('productos').find({}).toArray()
        let total = 0;
      
        productos.forEach((producto)=>{
            total += producto.cantidad
        })
    
        return "El promedio de notas es de " + (total / cantNotas) + " y la cantidad de notas es de " + cantNotas;    
    }
 */
    saveProducto = async producto => {
        if(!ConectMongoDB.connection) return {}

        producto.cantidad = parseInt(producto.cantidad)
        await ConectMongoDB.db.collection('productos').insertOne(producto)
        return producto;
    }

    updateProducto = async (producto,id) => {
        if(!ConectMongoDB.connection) return {}

        await ConectMongoDB.db.collection('productos').updateOne(
            {_id: ObjectId(id)},
            {$set: producto}
        )
        producto.cantidad = parseInt(producto.cantidad)

        let productoActualizado = await this.findProducto(id)
        return productoActualizado    
    }

    deleteProducto = async id => {
        if(!ConectMongoDB.connection) return {}

        let productoEliminado = await this.findProducto(id)
        await ConectMongoDB.db.collection('productos').deleteOne({_id: ObjectId(id)})
        
        return productoEliminado    
    }
}

export default ProductosMongoDAO
