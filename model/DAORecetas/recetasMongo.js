import ConectMongoDB from '../DB.js'
import { ObjectId } from "mongodb"


class RecetasMongoDAO {

    findReceta = async id => {
        if(!ConectMongoDB.connection) return {}
        let receta = await ConectMongoDB.db.collection('recetas').findOne({_id: ObjectId(id)})
        return receta;    
    }

    findRecetas = async ()  => {
        if(!ConectMongoDB.connection) return []
        try {
            let recetas = await ConectMongoDB.db.collection('recetas').find({}).toArray()
            return recetas
        }
        catch {
            return []
        }
    }

    //Cálculo de promedio
     calculate = async () => {
        if(!ConectMongoDB.connection) return {}
        return {}
    /*     let cantNotas = await ConectMongoDB.db.collection('recetas').countDocuments({})
        let recetas = await ConectMongoDB.db.collection('recetas').find({}).toArray()
        let total = 0;
      
        recetas.forEach((receta)=>{
            total += receta.cantidad
        })
    
        return "El promedio de notas es de " + (total / cantNotas) + " y la cantidad de notas es de " + cantNotas;  */   
    }

    saveReceta = async receta => {
        if(!ConectMongoDB.connection) return {}

        await ConectMongoDB.db.collection('recetas').insertOne(receta)
        return receta;
    }

    updateReceta = async (receta,id) => {
        if(!ConectMongoDB.connection) return {}

        await ConectMongoDB.db.collection('recetas').updateOne(
            {_id: ObjectId(id)},
            {$set: receta}
        )
        receta.cantidad = parseInt(receta.cantidad)

        let recetaActualizado = await this.findReceta(id)
        return recetaActualizado    
    }

    deleteReceta = async id => {
        if(!ConectMongoDB.connection) return {}

        let recetaEliminado = await this.findReceta(id)
        await ConectMongoDB.db.collection('recetas').deleteOne({_id: ObjectId(id)})

        return recetaEliminado    
    }
}

export default RecetasMongoDAO
