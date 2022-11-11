import ProductosMongoDAO from './productosMongo.js'

class ProductosFactoryDAO {
    static devolverDAO(tipo) {
        switch(tipo) {

            case 'MONGO' :
                console.log("Persistenca en MongoDB")
                return new ProductosMongoDAO()

            default: 
                console.log("Persistencia por default en MongoDB")
                return new ProductosMongoDAO()
        }
    }
}

export default ProductosFactoryDAO