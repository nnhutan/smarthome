import { light } from '../models/lightModel.js'

const getData = async (req, res) => {
    light.find({}).populate('lightLogs').exec(
        (err, data) => {
            if (err) console.log(err)
            else res.send(
                data.map((light) => ({
                    'id': light.feed_id,
                    'name': light.name,
                    'status': light.is_on,
                    'log': light.log,
                    'listLog': light.lightLogs.map((log) => ({
                        'id': log.ada_id,
                        'time': new Date(log.time),
                        'desc': log.action
                    }))
                }))
            )
        })
}
export { getData }
