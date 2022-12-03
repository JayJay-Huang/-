confDev_1 = {
    server: '198.0.9.113',
    authentication: {
        type: 'default',
        options: {
            userName: 'sa',
            password: 'jiuDD02)'
        }
    },
    options: {
        encrypt: true,
        database: 'MEDIA_TRANSMISSION',
        enableArithAbort:false
    }
};

confDev_2 = {
    server: '198.0.9.61',
    authentication: {
        type: 'default',
        options: {
            userName: 'push_mgr',
            password: 'a3.14159'
        }
    },
    options: {
        encrypt: true,
        database: 'MEDIA_TRANSMISSION',
        enableArithAbort:false
    }
};

confSit_1 = {
	server: '172.25.143.1',
    authentication: {
		type: 'default',
		options: {
			userName: 'push_mgr',
			password: 'a3.14159'
		}
	},
	options: {
		encrypt: true,
		database: 'MEDIA_TRANSMISSION',
		enableArithAbort:false
	}
};

confSit_2 = {
	server: '172.25.143.1',
    authentication: {
		type: 'default',
		options: {
			userName: 'api_mgr',
			password: 'a1048576'
		}
	},
	options: {
		encrypt: true,
		database: 'MEDIA_TRANSMISSION',
		enableArithAbort:false
	}
};

confProd_1 = {
    server:'172.25.160.133',
    authentication: {
        type: 'default',
        options: {
            userName: 'api_user',
            password: '1qaz@WSX',
        }
    },
	port: 50624,
    options: {
        encrypt: true,
        database: 'MEDIA_TRANSMISSION',
        enableArithAbort:false
    }
};

confProd_2 = {
    server:'172.25.160.133',
    authentication: {
        type: 'default',
        options: {
            userName: 'adm_user',
            password: '1qaz@WSX',
        }
    },
	port: 50624,
    options: {
        encrypt: true,
        database: 'MEDIA_TRANSMISSION',
        enableArithAbort:false
    }
};

local = {
    server:'LAPTOP-K1F6R25D',
    authentication: {
        type: 'default',
        options: {
            userName: 'Jay',
            password: 'kk0920',
        }
    },
    options: {
        encrypt: true,
        database: 'MEDIA_TRANSMISSION',
        enableArithAbort:false
    }
};

module.exports = {
    default : local
    // default : confDev_2
};