import * as winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import {Logger, LoggerConfigs} from './types';

export interface LoggerConfigs {
  dirname: string;
  filename: string;
  datePattern?: string;
  maxSize?: string;
  maxFiles?: string;
}

export const createLogger = (configs: LoggerConfigs = {}): winston.Logger => {
  const { dirname, filename, datePattern = 'YYYY-MM-DD', maxSize = '10kb', maxFiles = '5m', ...rest } = configs;

  const instance = winston.createLogger({
    ...rest,
    format: winston.format.combine(
      winston.format.json(),
      winston.format.metadata({ fillExcept: ['message', 'level', 'timestamp'] })
    ),
    transports: [
      new DailyRotateFile({ dirname, filename, datePattern, maxSize, maxFiles }),
    ]
  });

  return instance;
};
