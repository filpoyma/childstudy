const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const helmet = require("helmet");

// Routes import
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const tecTestRouter = require('./routes/tectest');

let app = express();
app.use(logger('dev'));

//*********************MONGOOSE CONNECTION*************************************
const dbName = (process.env.NODE_ENV === "development")
  ? ('mongodb://localhost/getpsyched')
  : (`mongodb+srv://user:${process.env.PASSW_DB}@cluster0-woi64.mongodb.net/getpsyched?retryWrites=true&w=majority`);

try {
mongoose.connect(dbName, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
} catch (error) {
  console.log(error)
}
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbName);
});
// If the connection throws an error
mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});
// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});
// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
//****************************** END MONGOOSE CONNECTION***********************

const corsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
};
app.use(corsMiddleware);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client', 'build')));

//helmet
app.use(helmet());

//Routes use
app.use('/api', indexRouter);
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/tectest', tecTestRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

module.exports = app;
