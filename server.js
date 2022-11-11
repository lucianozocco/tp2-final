import express from 'express'
import { RouterProductos } from './router/productos.js'
import { RouterRecetas } from './router/recetas.js'
import ConectMongoDB from './model/DB.js'
import config from './config.js'

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Uso de rutas con express.Router
app.use('/api/productos', new RouterProductos().start())
app.use('/api/recetas', new RouterRecetas().start())

// Conexión con BD
if(config.MODO_PERSISTENCIA == 'MONGO') {
    await ConectMongoDB.conectar()
}

// Servidor de aplicación en escucha
const PORT = process.env.PORT || config.PORT
const server = app.listen(PORT, () => console.log(`El servidor Express está escuchando en el puerto número: ${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
