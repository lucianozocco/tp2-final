import RecetasMongoDAO from './recetasMongo.js'

class RecetasFactoryDAO {
    static devolverDAO(tipo) {
        switch(tipo) {

            case 'MONGO' :
                console.log("Persistenca en MongoDB")
                return new RecetasMongoDAO()

            default: 
                console.log("Persistencia por default en MongoDB")
                return new RecetasMongoDAO()
        }
    }
}

export default RecetasFactoryDAO