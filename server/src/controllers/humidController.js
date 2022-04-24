import { humid } from '../models/humidModel.js'

const getData = async (req, res) => {
    humid.findOne({}).populate('listLog').exec(
        (err, data) => {
            if (err) console.log(err)
            else res.send(data)
        })
}

export { getData }
