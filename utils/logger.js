'use strict';

const Winston = require('winston');
const QueueConfiguration = require('../config').getQueueConfiguration();

const Logger = scope => {
    return new Winston.Logger({
        level: QueueConfiguration.getLogLevel(),
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
