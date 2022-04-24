import express from 'express'
const doorsRouter = express.Router()

import { getData } from '../controllers/doorsController.js'

doorsRouter.get('/', getData)

export { doorsRouter }
