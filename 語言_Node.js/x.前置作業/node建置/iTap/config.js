/*  
 * Environment variable
*/
SERVER_PORT = 17443;
TGI_SERVER_URL = 'http://www.api.cloud.taipei.gov.tw/CSCP_API/tgi';
SERVER_TOKEN = {
    DevEnv: 'c05ce414-c29e-4385-a317-04c4ef67879fa64ea674-1af6-46f6-a00e-fd626305e6dd',
    ProEnv: '481da221-b42b-4203-a750-1e6865ba47a5d91b9a93-19b4-48b9-b103-dc6108067553'
};
OAuthURL = {
    DevEnv: 'https://demo.jrsys.com.tw/tpcd/api/v1.0.9/user/my',
    ProEnv: 'https://id.taipei/tpcd/api/v1.0.9/user/my'
};
GTS_service = {
    apiUrl: 'https://data.taipei/api/getDatasetInfo/downloadResource?id=01e8d4bc-8b80-45a4-9ddf-b091dda00b5f&rid=7f9f0c35-cba7-4670-8d85-999a5a92112a'
};
CVN_service = {
    hashKey: '(hashKey)',
    pinCode: '(pinCode)',
    privateKey: '(privateKey1234)',
    qrCodeURL: 'http://163.29.40.218/TPPS/cvn/qr?c='
};
CVN_NotifyService = {
    // host: '127.0.0.1',
    // host: '163.29.40.224', // 正式區
    // host: 'www.api.cloud.taipei.gov.tw', // 正式區
    host: '163.29.40.220', // 測試區
    socket_port: 7765,
};
CVN_getAcc = {
    accCodeUrl: 'https://mycode.gov.taipei:8080/api/TakeNumber/UnitInfos'
};
PCD_conf = {
    PROD: {
        api: 'https://sw.gov.taipei'
    },
    UAT: {
        api: 'https://210.69.108.147:8082'
    }
};
BCS_conf = {
    ApiUrl: 'http://163.29.40.224/CSCP_API/tbs/'
    // ApiUrl: 'http://163.29.40.220/CSCP_API/tbs/'
};
TLog = {
    info: true,
    debug: true,
    verbose: false
};

module.exports = {
    SERVER_PORT : SERVER_PORT,
    CVN_NotifyService : CVN_NotifyService,
    TGI_SERVER_URL : TGI_SERVER_URL,
    SERVER_TOKEN : SERVER_TOKEN.DevEnv,
    OAuthURL : OAuthURL.DevEnv,
    GTS_service : GTS_service,
    CVN_service : CVN_service,
    CVN_getAcc: CVN_getAcc,
    PCD_conf: PCD_conf.UAT,
    BCS_conf: BCS_conf,
    tLog: TLog
};