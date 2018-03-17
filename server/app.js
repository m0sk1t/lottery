const cookieParser = require('cookie-parser');
const compression = require('compression');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const router = require('./router');
const morgan = require('morgan');
const chalk = require('chalk');
const path = require('path');
const app = express();
const DB = 'lottery';

app.use(compression());
app.use(cookieParser());
app.use(morgan('combined'));
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(express.static(path.join(__dirname, '../client/build')));

app.use(router);
const http = require('http').Server(app);
const socketio = require('socket.io')(http);

mongoose.connect(`mongodb://localhost/${DB}`);
mongoose.connection.once('open', _ => console.log(`${chalk.green('✓')} successfully connected to db ${DB}!`))
socketio.on('connection', (socket) => console.log(`${ chalk.green('✓') } socket user ${socket.client.id} connected`));
module.exports = http;