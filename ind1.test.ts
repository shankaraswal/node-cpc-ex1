import { LoggerWrapper } from './auths';

describe('LoggerWrapper', () => {

  let logger: LoggerWrapper;

  beforeEach(() => {
    logger = new LoggerWrapper(); 
  });

  it('calls debug on the underlying logger', () => {
    const spy = jest.spyOn(logger['loggerInstance'], 'debug');
    logger.debug('Test message');
    expect(spy).toHaveBeenCalledWith('Test message', expect.anything());
  });

  it('calls info on the underlying logger', () => {
    const spy = jest.spyOn(logger['loggerInstance'], 'info');
    logger.info('Test message');
    expect(spy).toHaveBeenCalledWith('Test message', expect.anything());
  });

  it('calls warn on the underlying logger', () => {
    const spy = jest.spyOn(logger['loggerInstance'], 'warn');
    logger.warn('Test message');
    expect(spy).toHaveBeenCalledWith('Test message', expect.anything());
  });

  it('calls error on the underlying logger', () => {
    const spy = jest.spyOn(logger['loggerInstance'], 'error');
    logger.error('Test message');
    expect(spy).toHaveBeenCalledWith('Test message', expect.anything());
  });

  it('calls log on the underlying logger for log level', () => {
    const spy = jest.spyOn(logger['loggerInstance'], 'log');
    logger.log({level: 'log', message: 'Test message'});
    expect(spy).toHaveBeenCalledWith({level: 'log', message: 'Test message'});
  });

  it('calls info on the underlying logger for non-log levels', () => {
    const spy = jest.spyOn(logger['loggerInstance'], 'info');
    logger.log({level: 'info', message: 'Test message'});
    expect(spy).toHaveBeenCalledWith({level: 'info', message: 'Test message'});
  });

});