import dotenv from 'dotenv'

dotenv.config()

const PORT = 8080
const STRCNX = process.env.STRCNX
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || 'MEM'
const BASE = process.env.BASE || 'test' 

export default {
    PORT,
    STRCNX,
    MODO_PERSISTENCIA,
    BASE
}