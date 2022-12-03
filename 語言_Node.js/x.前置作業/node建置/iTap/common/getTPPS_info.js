const express = require('express');
const router = express.Router();
const date = require('date-and-time');
const fetch = require('node-fetch');
const gServerToken = require('../config').SERVER_TOKEN;
const gOAuthURL = require('../config').OAuthURL;
const tlog = require('../common/tlog');
const gApi = 'getTPPS_info';
var gGrantToken = null;

// get TPPS_info
function getTPPS_info(pGrantToken) {
    gGrantToken = pGrantToken;
    let vResult = { 
        payload: null, 
        errorMsg: null 
    };
    const vOAuthURL = gOAuthURL;
    const vFetchOption = {
        headers:{
            'server-token': gServerToken,
            'Authorization': 'Bearer ' + pGrantToken
    }};
    tlog.debug(gApi, 'getTPPS_info().pGrantToken', 'GrantToken = ' + gGrantToken);
    return fetch( vOAuthURL, vFetchOption)
    .then( pFetchRes => pFetchRes.json())
    .then( pFetchData => {
        if (pFetchData.error) {
            tlog.debug(gApi, 'getTPPS_info().pFetchData.error', gGrantToken);
            tlog.error(gApi , 'getTPPS_info().pFetchData.error', JSON.stringify(pFetchData));
            vResult.errorMsg = pFetchData;
            return vResult;
        } else {
            tlog.debug(gApi, 'getTPPS_info().success', gGrantToken);
            tlog.info(gApi, 'getTPPS_info().success', 'pFetchData=' + JSON.stringify(pFetchData));
            vResult.payload = pFetchData.data;
            return vResult;
        };
    })
    .catch( pErr => {
        tlog.debug(gApi, 'getTPPS_info().catch.pErr', gGrantToken);
        tlog.error(gApi , 'getTPPS_info().catch.pErr', JSON.stringify(pErr));
        vResult.errorMsg = {
            error: "Exception",
            error_description: "getTPPS_info fetch exception"
        };
        return vResult;
    });
}

module.exports = {
    getTPPS_info: getTPPS_info
}