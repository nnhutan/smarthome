import mongoose from 'mongoose';
const { Schema } = mongoose;

const tempSchema = new Schema({
    room: {type: String, default: 'Phòng 1'},
    value: Number,
    feed_id: String,
    log: {type: Boolean, default: true},
    listLog: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'log'
        }],
        default: []
    }
})

const temp = mongoose.model('temp', tempSchema)

export {temp}