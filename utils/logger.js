const winston = require('winston');
require('winston-daily-rotate-file');
const fs = require('fs');

let logfolder = './logs';
if (!fs.existsSync(logfolder)){
    fs.mkdirSync(logfolder);
}
const transport = new (winston.transports.DailyRotateFile)({
    filename: './logs/application-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
});

transport.on('rotate', function(oldFilename, newFilename) {
    // do something fun
  });
const logger = winston.createLogger({
    transports: [
        transport
    ]
});
module.exports = logger;