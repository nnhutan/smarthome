import express from 'express'
const humidRouter = express.Router()

import { getData } from '../controllers/humidController.js'

humidRouter.get('/', getData)

export { humidRouter }
