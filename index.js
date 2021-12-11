import express from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/tagRoutes';

const app = express();
const PORT = 4000;

// Database Connect
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/mma-api', {
    useNewUrlParser: true
    //useUnifiedTopology: true
})

// Setup Parsing 
app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
)

routes(app)

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`))