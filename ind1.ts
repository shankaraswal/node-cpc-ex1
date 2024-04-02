import { createLogger } from 'winston';
import { LoggerConfigs, LogEntry } from '/types';

export class LoggerWrapper {
    private loggerInstance: any; // Assuming you have some type for loggerInstance

    constructor(configs?: LoggerConfigs) {
        this.loggerInstance = createLogger(configs);
    }

    debug = <T>(message: string, meta?: T): void => {
        this.loggerInstance.debug(message, this.sanitize(meta));
    }

    info = <T>(message: string, meta?: T): void => {
        this.loggerInstance.info(message, this.sanitize(meta));
    }

    warn = <T>(message: string, meta?: T): void => {
        this.loggerInstance.warn(message, this.sanitize(meta));
    }

    error = <T>(message: string, meta?: T): void => {
        this.loggerInstance.error(message, this.sanitize(meta));
    }

    log = (data: LogEntry): void => {
        if (data.level === 'log') {
            this.loggerInstance.log(data);
        } else {
            this.loggerInstance.info(data);
        }
    }

    private sanitize = (meta: unknown): unknown => {
        return meta;
    }
}
