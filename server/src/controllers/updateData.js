import axios from 'axios'
const config = {
    headers: {
        'X-AIO-Key': 'aio_nTsq28MxeF73f31XpMARar8IoO5t'
    }
}
const origin = 'https://io.adafruit.com/api/v2/giangnam1905'

import { log } from '../models/logModel.js'
import { door } from '../models/doorModel.js'
import { light } from '../models/lightModel.js'
import { temp } from '../models/tempModel.js'
import { humid } from '../models/humidModel.js'
import { gas } from '../models/gasModel.js'

const updateAll = () => {
    const door = updateDoor()
    const light1 = updateLight1()
    const light2 = updateLight2()
    const gas = updateGas()
    const temp = updateTemp()
    const humid = updateHumid()
    Promise.all([door, light1, light2, gas, temp, humid]).then().catch(error => {
        console.log(error)
    })
}

const updateDoor = async () => {
    const data = await axios.get(origin + '/feeds/bbc-door/data?limit=1').then((res) => {
        return res.data[0]
    })
    const findDoor = await door.findOne({ 'feed_id': data.feed_id })
    if (!findDoor) {
        const newDoor = {
            'feed_id': data.feed_id,
            'open': data.value == 'OPEN',
            'begin_spectate': new Date().toString(),
            'end_spectate': new Date().toString(),
        }
        door.create(newDoor, (err, data) => {
            if (err) console.log(err)
        })
    }
    else {
        findDoor.open = data.value == 'OPEN'
        findDoor.save((err) => {
            if (err) console.log(err)
        })
        const findLog = await log.findOne({ 'ada_id': data.id })
        if (!findLog) {
            const newLog = {
                'ada_id': data.id,
                'time': data.created_at,
                'action': data.value == 'OPEN' ? 'Cửa 1 mở' : 'Cửa 1 đóng'
            }
            log.create(newLog, (err, data) => {
                if (err) console.log(err)
                else {
                    findDoor.listLog.unshift(data._id)
                    findDoor.save((err, data) => {
                        if (err) console.log(err)
                    })
                }
            })
        }
    }
}

const updateLight1 = async () => {
    const led1 = await axios.get(origin + '/feeds/bbc-led/data?limit=1').then((res) => {
        return res.data[0]
    })
    const findLight1 = await light.findOne({ 'feed_id': led1.feed_id })
    if (!findLight1) {
        const newLight = {
            'name': 'Đèn 1',
            'feed_id': led1.feed_id,
            'is_on': led1.value == '1'
        }
        light.create(newLight, (err, data) => {
            if (err) console.log(err)
        })
    }
    else {
        findLight1.is_on = led1.value == '1'
        findLight1.save((err) => {
            if (err) console.log(err)
        })
        const findLog = await log.findOne({ 'ada_id': led1.id })
        if (!findLog) {
            const newLog = {
                'ada_id': led1.id,
                'time': led1.created_at,
                'action': led1.value == '1' ? 'Đèn 1 mở' : 'Đèn 1 tắt'
            }
            log.create(newLog, (err, data) => {
                if (err) console.log(err)
                else {
                    findLight1.lightLogs.unshift(data._id)
                    findLight1.save((err, data) => {
                        if (err) console.log(err)
                    })
                }
            })
        }
    }
}

const updateLight2 = async () => {
    const led2 = await axios.get(origin + '/feeds/bbc-led-1/data?limit=1').then((res) => {
        return res.data[0]
    })
    const findLight2 = await light.findOne({ 'feed_id': led2.feed_id })
    if (!findLight2) {
        const newLight = {
            'name': 'Đèn 2',
            'feed_id': led2.feed_id,
            'is_on': led2.value == '3',
        }
        light.create(newLight, (err, data) => {
            if (err) console.log(err)
        })
    }
    else {
        findLight2.is_on = led2.value == '3'
        findLight2.save((err) => {
            if (err) console.log(err)
        })
        const findLog = await log.findOne({ 'ada_id': led2.id })
        if (!findLog) {
            const newLog = {
                'ada_id': led2.id,
                'time': led2.created_at,
                'action': led2.value == '3' ? 'Đèn 2 mở' : 'Đèn 2 tắt'
            }
            log.create(newLog, (err, data) => {
                if (err) console.log(err)
                else {
                    findLight2.lightLogs.unshift(data._id)
                    findLight2.save((err, data) => {
                        if (err) console.log(err)
                    })
                }
            })
        }
    }
}

const updateGas = async () => {
    const data = await axios.get(origin + '/feeds/bbc-gas/data?limit=1').then((res) => {
        return res.data[0]
    })
    const findGas = await gas.findOne({ 'feed_id': data.feed_id })
    if (!findGas) {
        const newGas = {
            'value': data.value,
            'feed_id': data.feed_id
        }
        gas.create(newGas, (err, data) => {
            if (err) console.log(err)
        })
    }
    else {
        findGas.value = data.value
        findGas.save((err) => {
            if (err) console.log(err)
        })
        const findLog = await log.findOne({ 'ada_id': data.id })
        if (!findLog) {
            const newLog = {
                'ada_id': data.id,
                'time': data.created_at,
                'action': 'Nồng độ khí gas tại phòng 1: ' + data.value
            }
            log.create(newLog, (err, data) => {
                if (err) console.log(err)
                else {
                    findGas.listLog.unshift(data._id)
                    findGas.save((err, data) => {
                        if (err) console.log(err)
                    })
                }
            })
        }
    }
}

const updateTemp = async () => {
    const data = await axios.get(origin + '/feeds/bbc-temp/data?limit=1').then((res) => {
        return res.data[0]
    })
    const findTemp = await temp.findOne({ 'feed_id': data.feed_id })
    if (!findTemp) {
        const newTemp = {
            'value': data.value,
            'feed_id': data.feed_id
        }
        temp.create(newTemp, (err, data) => {
            if (err) console.log(err)
        })
    }
    else {
        findTemp.value = data.value
        findTemp.save((err) => {
            if (err) console.log(err)
        })
        const findLog = await log.findOne({ 'ada_id': data.id })
        if (!findLog) {
            const newLog = {
                'ada_id': data.id,
                'time': data.created_at,
                'action': 'Nhiệt độ tại phòng 1: ' + data.value
            }
            log.create(newLog, (err, data) => {
                if (err) console.log(err)
                else {
                    findTemp.listLog.unshift(data._id)
                    findTemp.save((err, data) => {
                        if (err) console.log(err)
                    })
                }
            })
        }
    }
}

const updateHumid = async () => {
    const data = await axios.get(origin + '/feeds/bbc-humi/data?limit=1').then((res) => {
        return res.data[0]
    })
    const findHumid = await humid.findOne({ 'feed_id': data.feed_id })
    if (!findHumid) {
        const newHumid = {
            'value': data.value,
            'feed_id': data.feed_id
        }
        humid.create(newHumid, (err, data) => {
            if (err) console.log(err)
        })
    }
    else {
        findHumid.value = data.value
        findHumid.save((err) => {
            if (err) console.log(err)
        })
        const findLog = await log.findOne({ 'ada_id': data.id })
        if (!findLog) {
            const newLog = {
                'ada_id': data.id,
                'time': data.created_at,
                'action': 'Độ ẩm tại phòng 1: ' + data.value
            }
            log.create(newLog, (err, data) => {
                if (err) console.log(err)
                else {
                    findHumid.listLog.unshift(data._id)
                    findHumid.save((err, data) => {
                        if (err) console.log(err)
                    })
                }
            })
        }
    }
}

export { updateAll, updateDoor, updateLight1, updateLight2, updateGas, updateTemp, updateHumid };