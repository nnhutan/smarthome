import mongoose from 'mongoose';
const { Schema } = mongoose;

const gasSchema = new Schema({
    room: { type: String, default: 'Phòng 1' },
    value: Number,
    feed_id: String,
    log: { type: Boolean, default: true },
    listLog: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'log'
        }],
        default: []
    }
})

const gas = mongoose.model('gas', gasSchema)

export { gas }