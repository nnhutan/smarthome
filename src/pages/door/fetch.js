import axios from 'axios'

const origin = 'http://localhost:3001/api/v1'

const getData = async () => {
    const respond = await axios.get(origin + '/doors')
    return respond.data
}

export { getData }