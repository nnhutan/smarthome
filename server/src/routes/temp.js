import express from 'express'
const tempRouter = express.Router()
import { getData } from '../controllers/tempController.js'

tempRouter.get('/', getData)

export { tempRouter }