const app = require('express')();
const bodyParser = require('body-parser');
const date = require('date-and-time');
const gPortNumber = require('./config').SERVER_PORT;
const cors = require('cors')
const fs = require('fs');
const https = require('https');
const tlog = require('./common/tlog');
const gApi = 'itapApi';
const gTLogConf = require('./config').tLog;

app.use(cors());
app.use(bodyParser.json());

// demo
app.use('/demo',require('./api/demo/service'));

// DevEnv:
app.listen(gPortNumber,startListen);

// ProEnv:
// https.createServer({
//   key: fs.readFileSync('./ssl/private.key'),
//   cert: fs.readFileSync('./ssl/auth-cert.pem'),
//   ca: fs.readFileSync('./ssl/eCA1_GTLSCA.crt')}, app)
// .listen(gPortNumber,startListen);

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

function startListen() {
  tlog.info(gApi, 'listen', 'Now listening on port' + gPortNumber + '.');
};