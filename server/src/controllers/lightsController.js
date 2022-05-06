import { light } from '../models/lightModel.js'
import axios from 'axios'
const config = {
    headers: {
        'X-AIO-Key': 'aio_RMiZ05Qvl5YSSpYWbsZ18JZYsvrL'
    }
}
const origin = 'https://io.adafruit.com/api/v2/giangnam1905'

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

const setData = async (req, res) => {
    const id = req.params.lightId;
    let value, feed_key;
    light.findOne({ feed_id: id },
        (err, data) => {
            if (err) console.log(err);
            else {
                data.is_on = !data.is_on
                if (id == '1828841') {
                    feed_key = 'bbc-led';
                    value = data.is_on? "1" : "0";
                }
                else {
                    feed_key = 'bbc-led-1'
                    value = data.is_on? "3" : "2";
                }
                data.save()
                axios.post(origin + `/feeds/${feed_key}/data`, {"value": value}, config)
            }
        })
}

export { getData, setData }
