import express from 'express'
const gasRouter = express.Router()

import { getData } from '../controllers/gasController.js'

gasRouter.get('/', getData)

export { gasRouter }
