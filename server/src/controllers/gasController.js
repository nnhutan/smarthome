import { gas } from '../models/gasModel.js'

const getData = async (req, res) => {
    gas.findOne({}).populate('listLog').exec(
        (err, data) => {
            if (err) console.log(err)
            else res.send([{
                'id': data.feed_id,
                'name': data.room,
                'log': data.log,
                'value': data.value,
                'listLog': data.listLog.map((log) => ({
                    'id': log.ada_id,
                    'time': new Date(log.time),
                    'desc': log.action
                }))
            }])
        })
}

export { getData }
