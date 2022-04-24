import { temp } from '../models/tempModel.js'

const getData = async (req, res) => {
    temp.findOne({}).populate('listLog').exec(
        (err, data) => {
            if (err) console.log(err)
            else res.send(data)
        })
}

export { getData }
