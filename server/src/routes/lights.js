import express from 'express'
const lightsRouter = express.Router()
import { 
    getData,
    setData,
} from '../controllers/lightsController.js'

lightsRouter.get('/', getData)
lightsRouter.post('/:lightId', setData)

export { lightsRouter }