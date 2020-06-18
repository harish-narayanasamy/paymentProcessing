const { createLogger, transports, format } = require('winston');

/*
  Winston logger configuration for console transport
*/
const logger = createLogger({
  format: format.combine(
    format.timestamp({
      format: 'DD-MM-YYYY HH:mm:ss'
    }),
    format.prettyPrint({ colorize: true }),
    format.colorize({ all: true }),
    format.json(),
    format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.Console({
      level: 'info',
      handleExceptions: true
    })
  ]
});

module.exports = {
  logger
};
