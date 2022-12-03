/*
 * Syslog
*/
const express = require('express');
const router = express.Router();
const date = require('date-and-time');
const sql = require('./dbConnector');

// const tlog = require('./tlog');
// const gApi = 'LOG';

// API 說明 – Query the syslog
// http://<server_ip[:port]>/i/log
router.post('/', (req, res) => {
    
    // tlog.info(gApi, '/(POST)', 'launched');

    vFilter_lv = null;
    if (req.body.logLevel) {
        vFilter_lv = " and logLevel=" + req.body.logLevel + " ";
    }

    vFilter_api = null;
    if (req.body.api) {
        vFilter_api = " and api='" + req.body.api.toUpperCase() + "' ";
    }

    vFilter_function = null;
    if (req.body.function) {
        vFilter_function = " and [function] like '%" + req.body.function + "%' ";
    }

    vFilter_message = null;
    if (req.body.message) {
        vFilter_message = " and [message] like '%" + req.body.message + "%' ";
    }

    vFilter_dtCreate = null;
    if (req.body.dtCreate) {
        vFilter_dtCreate = " and [dtCreate] like '" + req.body.dtCreate + "%' ";
    }

    if (req.body.now) {
        let vQuertStr = "    select top 5000 * "
            + "    from [MEDIA_TRANSMISSION].[dbo].[tb_api_syslog] "
            + "      where 1=1 "
            + "      and dtCreate >= '" + date.format(new Date(), 'YYYY/MM/DD') + "' "
            + ((vFilter_lv)? vFilter_lv: " ")
            + ((vFilter_api)? vFilter_api: " ")
            + ((vFilter_function)? vFilter_function: " ")
            + ((vFilter_message)? vFilter_message: " ")
            + ((vFilter_dtCreate)? vFilter_dtCreate: " ")
            + "    order by dtCreate desc "
            + "  ; ";
        sql.query(vQuertStr)
        .then(pLogs => {
            // tlog.info(gApi, '/(POST).query()', 'SqlQuery.success');
            res.send(pLogs);
        });
    } else {
        let vQuertStr = "    select top 1000 * "
            + "    from [MEDIA_TRANSMISSION].[dbo].[tb_api_syslog] "
            + "    where 1=1 "
            + ((vFilter_lv)? vFilter_lv: " ")
            + ((vFilter_api)? vFilter_api: " ")
            + ((vFilter_function)? vFilter_function: " ")
            + ((vFilter_message)? vFilter_message: " ")
            + ((vFilter_dtCreate)? vFilter_dtCreate: " ")
            + "    order by dtCreate desc "
            + "  ; ";
        sql.query(vQuertStr)
        .then(pLogs => {
            // tlog.info(gApi, '/(POST).query()', 'SqlQuery.success');
            res.send(pLogs);
        });
    }

});


module.exports = router;