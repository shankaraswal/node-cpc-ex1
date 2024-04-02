import { createLogger } from 'winston';
import { LoggerConfigs, LogEntry } from '/types';
import { LoggerWrapper } from './logger-wrapper';

describe('LoggerWrapper', () => {
  let logger: LoggerWrapper;

  beforeEach(() => {
    // Mock createLogger method
    jest.spyOn(createLogger, 'createLogger').mockImplementation(() => ({
      debug: jest.fn(),
      info: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
      log: jest.fn(),
    }));

    // Create instance of LoggerWrapper
    logger = new LoggerWrapper();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('debug', () => {
    it('should call debug method of the logger instance', () => {
      // Arrange
      const message = 'test message';
      const meta = { test: 'meta' };

      // Act
      logger.debug(message, meta);

      // Assert
      expect(logger.loggerInstance.debug).toBeCalledWith(message, meta);
    });
  });

  describe('info', () => {
    it('should call info method of the logger instance', () => {
      // Arrange
      const message = 'test message';
      const meta = { test: 'meta' };

      // Act
      logger.info(message, meta);

      // Assert
      expect(logger.loggerInstance.info).toBeCalledWith(message, meta);
    });
  });

  describe('warn', () => {
    it('should call warn method of the logger instance', () => {
      // Arrange
      const message = 'test message';
      const meta = { test: 'meta' };

      // Act
      logger.warn(message, meta);

      // Assert
      expect(logger.loggerInstance.warn).toBeCalledWith(message, meta);
    });
  });

  describe('error', () => {
    it('should call error method of the logger instance', () => {
      // Arrange
      const message = 'test message';
      const meta = { test: 'meta' };

      // Act
      logger.error(message, meta);

      // Assert
      expect(logger.loggerInstance.error).toBeCalledWith(message, meta);
    });
  });

  describe('log', () => {
    it('should call log method of the logger instance if the level is "log"', () => {
      // Arrange
      const data: LogEntry = { level: 'log', message: 'test message' };

      // Act
      logger.log(data);

      // Assert
      expect(logger.loggerInstance.log).toBeCalledWith(data);
    });

    it('should call info method of the logger instance if the level is not "log"', () => {
      // Arrange
      const data: LogEntry = { level: 'test', message: 'test message' };

      // Act
      logger.log(data);

      // Assert
      expect(logger.loggerInstance.info).toBeCalledWith(data);
    });
  });

  describe('sanitize', () => {
    it('should return the given meta object', () => {
      // Arrange
      const meta = { test: 'meta' };

      // Act
      const result = logger.sanitize(meta);

      // Assert
      expect(result).toBe(meta);
    });
  });
});