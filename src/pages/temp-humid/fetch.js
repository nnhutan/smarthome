import axios from 'axios'

const origin = 'http://localhost:3001/api/v1'

const getData = async () => {
    const temp = await axios.get(origin + '/temp').then((res) => { return res.data })
    const humid = await axios.get(origin + '/humid').then((res) => { return res.data })
    const tempLog = await temp.listLog.map((log, index) => ({
        'id': log.ada_id,
        'time': new Date(log.time),
        'desc': log.action + ' | ' + humid.listLog[index]?.action
    }))
    
    return ([{
        'id': temp.feed_id,
        'name': temp.room,
        'temp': temp.value,
        'humid': humid.value,
        'log': temp.log,
        'listLog': tempLog
    }])
}

export { getData }
