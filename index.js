import express from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/tagRoutes';

const app = express();
const PORT = 4000;

// Database Connect
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Setup Parsing 
app.use(express.urlencoded({extended: true}));
app.use(express.json())


// Check Content-Type 
app.post('/api/*', (req, res, next) => {
    if (!req.is('application/json')) {
        // Send error here
        res.send('Content-Type Incorrect');
    } else {
        next()    
    }
});

app.put('/api/*', (req, res, next) => {
    if (!req.is('application/json')) {
        // Send error here
        res.send('Content-Type Incorrect');
    } else {
        next()    
    }
});


app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
)

routes(app)

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`))