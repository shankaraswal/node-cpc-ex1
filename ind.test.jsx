// ind.test.ts

import { createLogger, LoggerWrapper } from './ind';
import logger from './ind';

describe('logger module', () => {

  describe('createLogger', () => {
    it('returns a logger object', () => {
      const logger = createLogger('test');
      expect(logger).toHaveProperty('info');
      expect(logger).toHaveProperty('warn');
    });
  });

  describe('default export', () => {
    it('exports a logger instance', () => {  
      expect(logger).toHaveProperty('info');
    });
  });

  describe('named exports', () => {
    it('exports createLogger', () => {
      expect(createLogger).toBeDefined();
    });

    it('exports LoggerWrapper', () => {
      expect(LoggerWrapper).toBeDefined();
    });
  });

  describe('integration', () => {
    // tests for integration with other modules
  });

});
