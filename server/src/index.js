import express from 'express';
import mongoose from 'mongoose';
import { updateAll } from './controllers/updateData.js'
import { router } from './routes/index.js'
import cors from 'cors'

const app = express()
mongoose.connect("mongodb+srv://dadn:123123123@cluster0.ssxqv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true }).catch(err => console.error(err));

// updateAll();
setInterval(updateAll, 1000)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
router(app)
app.listen(3001, () => {
    console.log('Server is listening on 3001')
})
