/*  
 * Common module: System log
 * Please follow the rule in loggin levels:
 *   error(5)= Errors, the highest level.
 *   warning(4)= warnings.
 *   info(3)= Information messages
 *   debug(2)= debug output
 *   verbose(1)= for development only.
 * Update: 2022/02/09
*/
const date = require('date-and-time');
const sql = require('mssql');
const dbConnector_sql = require('./dbConnector');
const mSqlConf = require('./../dbConfig').default;
const gConf = require('./../config').tLog;
var gStrQueue = [];
var gIsWritingDb = false;

function loggin(pLv, pApi, pFun, pMsg) {
    let vLogString = getQueryStr(pApi, pFun, pLv, pMsg);
    gStrQueue.push(vLogString);
    if (!gIsWritingDb) {
        gIsWritingDb = true;
        OneThreadWriteDb();
    };
};


// Write log to Db
function OneThreadWriteDb(){
    if (gStrQueue.length > 0) {
        dbConnector_sql.nonQuery(gStrQueue[0]).then(()=>{
            console.debug(gStrQueue[0].replace('INSERT [MEDIA_TRANSMISSION].[dbo].[tb_api_syslog] VALUES(','').replace(')','').substr(0,200));
            gStrQueue.shift();
            OneThreadWriteDb();
        }).catch(pErr => {
            // Loggin in log module is not necessary...
        });
    } else {
        let qrStr = " With d as( "
        + " select ROW_NUMBER() over( order by [dtCreate] ) as Num "
        + " from [MEDIA_TRANSMISSION].[dbo].[tb_api_syslog] "
        + " ) "
        + " delete d "
        + " where d.Num > 10000 "
        + " and d.Num < 20000 ";
        dbConnector_sql.nonQuery(qrStr).then(() => {
            gIsWritingDb = false;
        });
    };
};

// Get the query string
function getQueryStr(pApi, pFunction, plogLevel, pMessage){
    let vQueryStr = '';    
    try{
        pMessage = (pMessage.length > 1000000000)? pMessage.substr(0, 1000000000): pMessage;
        pMessage = pMessage.replace(/\'/g, '`'); 

        vQueryStr = "INSERT [MEDIA_TRANSMISSION].[dbo].[tb_api_syslog] VALUES(" + 
        "'" + date.format(new Date(), 'YYYY/MM/DD HH:mm:ss') + "'," +
        "'" + pApi + "'," +
        "'" + pFunction + "'," +
        "'" + plogLevel + "'," +
        "'" + pMessage + "');";
    }catch(pErr){
        console.error('getQueryStr().error:'+ pErr);
    };
    return vQueryStr;
};

function impError(pApi, pFun, pMsg) { 
    loggin(5, pApi, pFun, pMsg); 
};
function impWarning(pApi, pFun, pMsg) { 
    loggin(4, pApi, pFun, pMsg); 
};
function impInfo(pApi, pFun, pMsg) { 
    if (gConf.info) loggin(3, pApi, pFun, pMsg); 
};
function impDebug(pApi, pFun, pMsg) { 
    if (gConf.debug) loggin(2, pApi, pFun, pMsg); 
};
function impVerbose(pApi, pFun, pMsg) { 
    if (gConf.verbose) loggin(1, pApi, pFun, pMsg); 
};

module.exports = {
    error: impError,
    warning: impWarning,
    info: impInfo,
    debug: impDebug,
    verbose: impVerbose,
};

