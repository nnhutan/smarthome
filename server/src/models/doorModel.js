import mongoose from 'mongoose';
const { Schema } = mongoose;

const doorSchema = new Schema({
    feed_id: String,
    name: { type: String, default: 'Cửa 1' },
    open: { type: Boolean, default: false },
    begin_spectate: String,
    end_spectate: String,
    warning_duration: { type: Number, default: 5 },
    log: { type: Boolean, default: true },
    listLog: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'log'
        }],
        default: []
    }
})

const door = mongoose.model('door', doorSchema, 'doors')

export { door }
