import mongoose from 'mongoose';
const { Schema } = mongoose;

const lightSchema = new Schema({
    feed_id: String,
    name: String,
    is_on: Boolean,
    auto: { type: Boolean, default: false },
    interval: { type: Number, default: 0 },
    log: { type: Boolean, default: true },
    lightLogs: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'log'
        }],
        default: []
    }
})

const light = mongoose.model('light', lightSchema, 'lights')

export {light}