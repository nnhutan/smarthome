import axios from 'axios'

const origin = 'http://localhost:3001/api/v1'

const getData = async () => {
    const temp = await axios.get(origin + '/temp').then((res) => { return res.data })
    const humid = await axios.get(origin + '/humid').then((res) => { return res.data })
    const tempLog = await temp.listLog.map((log, index) => {
        return ({
            day: new Date(log.time).getDate() + '/' + (new Date(log.time).getMonth() + 1),
            temp: parseInt(log.action.slice(22)),
            humid: parseInt(humid.listLog[index]?.action.slice(19))
        }
        )
    })

    for (let i = 0; i < tempLog.length; i++) {
        let j = i + 1;
        while (tempLog[i] && tempLog[j] && tempLog[i].day == tempLog[j].day) {
            tempLog[i].temp = (tempLog[i].temp + tempLog[j].temp) / 2;
            tempLog[i].humid = (tempLog[i].humid + tempLog[j].humid) / 2;
            delete tempLog[j];
            j++;
        }
    }
    
    return tempLog.filter(e => e != null && !isNaN(e.temp) && !isNaN(e.humid)).reverse()
}

export { getData }
