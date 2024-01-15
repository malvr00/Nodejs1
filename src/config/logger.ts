import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';

const logDir: string = 'logs';
const { combine, timestamp, printf, colorize } = winston.format;

/**
 * log format
 */
const logFormat = printf((info) => {
  return `[ ${info.level} ] ${info.timestamp} : ${info.message}`;
});

/**
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = winston.createLogger({
  format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), logFormat),
  transports: [
    new winstonDaily({
      level: 'info',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir,
      filename: `%DATE%.log`,
      maxFiles: 30,
      zippedArchive: true,
    }),
    new winstonDaily({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/error',
      filename: `%DATE%.error.log`,
      maxFiles: 30,
      zippedArchive: true,
    }),
  ],
});

// Production 환경이 아닌 경우(dev 등)
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: combine(
        colorize({ all: true }), // 색깔 넣어서 출력
        logFormat,
      ),
    }),
  );
}

export default logger;
