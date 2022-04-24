import { doorsRouter } from './doors.js'
import { lightsRouter } from './lights.js'
import { tempRouter } from './temp.js'
import { humidRouter } from './humid.js'
import { gasRouter } from './gas.js'

const router = (app) => {
    app.use('/api/v1/doors', doorsRouter)
    app.use('/api/v1/lights', lightsRouter)
    app.use('/api/v1/temp', tempRouter)
    app.use('/api/v1/humid', humidRouter)
    app.use('/api/v1/gas', gasRouter)
}

export { router }