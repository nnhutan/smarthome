import mongoose from 'mongoose';
const { Schema } = mongoose;

const logSchema = new Schema({
    ada_id: String,
    time: Date,
    action: String
})

const log = mongoose.model('log', logSchema, 'logs')

export {log}