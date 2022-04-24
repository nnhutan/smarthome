import express from 'express'
const lightsRouter = express.Router()
import { getData } from '../controllers/lightsController.js'

lightsRouter.get('/', getData)

export { lightsRouter }