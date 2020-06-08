'use strict';

class QueueConfig {
    constructor(size, maxRetry, logLevel) {
        this._size = size;
        this._maxRetry = maxRetry;
        this._logLevel = logLevel || 1;
    }

    getLogLevel() {
        return this._logLevel;
    }

    getSize() {
        return this._size;
    }

    getMaxRetry() {
        return this._maxRetry;
    }
}

let QueueConfigInstance = null;

const setQueueConfiguration = function (size, maxRetry) {
    QueueConfigInstance = new QueueConfig(size, maxRetry);
};

const getQueueConfiguration = function () {
    return QueueConfigInstance;
};

module.exports = {
    setQueueConfiguration,
    getQueueConfiguration
};
