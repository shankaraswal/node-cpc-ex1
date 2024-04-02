import { LoggerConfigs } from "./hlpr";
import { LoggerWrapper } from "./logger-wrapper";

describe("LoggerWrapper", () => {
  it("should create a logger instance with provided configs", () => {
    // Arrange
    const configs: LoggerConfigs = {
      dirname: "logs",
      filename: "app.log",
    };

    // Act
    const logger = new LoggerWrapper(configs);

    // Assert
    expect(logger.loggerInstance.dirname).toBe(configs.dirname);
    expect(logger.loggerInstance.filename).toBe(configs.filename);
  });

  it("should create a logger instance with default configs if none provided", () => {
    // Arrange

    // Act
    const logger = new LoggerWrapper();

    // Assert
    expect(logger.loggerInstance.dirname).toBeDefined();
    expect(logger.loggerInstance.filename).toBeDefined();
  });
});





import * as winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import {Logger, LoggerConfigs} from './types';

// Mock the createLogger function
jest.mock('./logger', () => ({
  createLogger: jest.fn(() => ({
    info: jest.fn(),
    error: jest.fn(),
  })),
}));

describe('createLogger', () => {
  it('should import the necessary modules', () => {
    // Import the function under test
    import('./logger');

    // Verify that the necessary modules were imported
    expect(winston).toBeDefined();
    expect(DailyRotateFile).toBeDefined();
  });

  it('should create a new instance of the winston logger', () => {
    // Import the function under test
    import('./logger');

    // Verify that the createLogger function was called with the expected arguments
    expect(createLogger).toHaveBeenCalledWith({
      format: expect.any(Object),
      transports: expect.any(Array),
    });
  });

  it('should set the format to json and add metadata to the logs', () => {
    // Import the function under test
    import('./logger');

    // Verify that the format was set to json
    expect(createLogger).toHaveBeenCalledWith({
      format: expect.objectContaining({
        json: expect.any(Boolean),
      }),
    });

    // Verify that metadata is being added to the logs
    expect(createLogger).toHaveBeenCalledWith({
      format: expect.objectContaining({
        metadata: expect.any(Object),
      }),
    });
  });

  it('should add a new transport of type DailyRotateFile to the logger', () => {
    // Import the function under test
    import('./logger');

    // Verify that the transport was added
    expect(createLogger).toHaveBeenCalledWith({
      transports: expect.arrayContaining([
        expect.objectContaining({
          type: 'daily-rotate-file',
        }),
      ]),
    });
  });
});