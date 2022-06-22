# 實作HTTP請求

```
"use strict";
var http = require('http');
var option = {
    host: '163.29.40.224', // ip  163.29.40.220:17443
    port: 80,
    path: '/',
    method: 'GET',
    headers: {
        'Contemt-Type': 'application/json'
    }
};

var req = http.request(option);
req.once('response', (res)=>{
    var result = '';
    res.on('data', function (chunk){
        result += chunk.toString();
    });
    res.on('end', function (){
        console.log(result);
    });
});
req.on("error", (e)=>{
    console.error(e.message);
});
req.end();
```