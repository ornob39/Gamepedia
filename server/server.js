const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./routes/api')
const PORT = 3000;
const path = require('path');

const app = express();
const http = require('http').createServer(app)
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', api);
const HTML_DIR = path.join(__dirname, '/public/')
app.use(express.static(HTML_DIR))
