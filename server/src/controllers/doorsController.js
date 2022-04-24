import { door } from '../models/doorModel.js'

const getData = async (req, res) => {
    door.findOne({}).populate('listLog').exec(
        (err, data) => {
            if (err) console.log(err)
            else res.send([{
                'id': data.feed_id,
                'name': data.name,
                'status': data.open,
                'log': data.log,
                'listLog': data.listLog.map((log) => ({
                    'id': log.ada_id,
                    'time': new Date(log.time),
                    'desc': log.action 
                }))
            }])
        })
}

export { getData }
