'use strict';

const Winston = require('winston');

const Logger = scope => {
    return new Winston.Logger({
        level: 'info',
        transports: [
            new (Winston.transports.Console)({
                timestamp: true,
                colorize: true,
                label: scope,
                prettyPrint: true
            })
        ]
    });
};

module.exports = Logger;
