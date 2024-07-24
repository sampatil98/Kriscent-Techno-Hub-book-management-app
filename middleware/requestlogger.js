const fs = require('fs');
const path = require('path');

const requestLogger = (req, res, next) => {

    let logFilePath = path.join(__dirname, '../files/logs/logs.txt');

    if (!fs.existsSync(logFilePath)) {
        fs.mkdirSync(logFilePath);
      }

    let logMessage = `${req.method} ${req.url} ${new Date().toISOString()}\n`;
    console.log("logMessage",logMessage);

    fs.appendFile(logFilePath, logMessage, (err) => {
      if (err) {
        console.error('Failed to write log to file:', err);
      }
    });
  
    next();
  };
  
  module.exports = {
    requestLogger
  };