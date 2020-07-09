const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();
const config = require('./config/config').get(process.env.NODE_ENV);

const userRoute = require('./routes/user_routes');

mongoose.connect(config.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

//Middleware
//Note- parser middleware must be initiated before any routes
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', userRoute) ///api/users/register


const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Backend server running on port: ${port}`);
})

