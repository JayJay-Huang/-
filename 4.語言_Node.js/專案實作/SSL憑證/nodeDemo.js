const app = require('express')();
const https = require('https');
const fs = require('fs');

https.createServer({
    key: fs.readFileSync('./private-key.pem'), // 檔案位置
    cert: fs.readFileSync('./auth-cert.pem'),  // 檔案位置
}, app).listen(17443);