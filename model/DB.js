import { MongoClient } from "mongodb"
import config from '../config.js'

class ConectMongoDB {
    static connection = false
    static db
    static client

    static conectar = async _ => {
        try {
            console.log('Conectando a la base de datos...')
            ConectMongoDB.client = new MongoClient(config.STRCNX,{
                useNewUrlParser: true,
                useUnifiedTopology: true
            })

            await ConectMongoDB.client.connect()
            console.log('Base de datos conectada.')

            ConectMongoDB.db = ConectMongoDB.client.db(config.BASE)
            ConectMongoDB.connection = true
        }
        catch(error) {
            console.log(`Error en la conexión de base datos: ${error.message}`)
        }
    }

    static desconectar = async () => {
        if(!ConectMongoDB.connection) return
        await ConectMongoDB.client.close()
    }
}

export default ConectMongoDB