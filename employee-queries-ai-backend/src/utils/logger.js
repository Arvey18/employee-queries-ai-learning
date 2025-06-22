import { createLogger, format as _format, transports as _transports } from 'winston';

// Create a logger instance
const logger = createLogger({
  level: 'info', // Default log level
  format: _format.combine(
    _format.timestamp(), // Add timestamp to logs
    _format.json(), // Log in JSON format
  ),
  transports: [
    new _transports.Console(), // Log to console
    new _transports.File({ filename: 'combined.log' }), // Log to a file
  ],
});

// Export the logger
export default logger;
