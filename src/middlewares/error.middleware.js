// Centralized error handling middleware
const errorHandler = (err, req, res, next) => {
  // Always log the error for debugging purposes
  console.error('Error:', err.message);
  
  // Default error status and message
  const status = err.status || 500;
  
  // In production, don't expose internal error details
  const message = (process.env.NODE_ENV === 'production') 
    ? 'Internal Server Error' 
    : err.message || 'Internal Server Error';

  const response = {
    message: message
  };

  // Only include stack trace in development mode
  if (process.env.NODE_ENV === 'development') {
    response.stack = err.stack;
  }

  res.status(status).json(response);
};

// Middleware to handle 404 - Route not found
const notFoundHandler = (req, res) => {
  res.status(404).json({ message: 'Route not found' });
};

module.exports = {
  errorHandler,
  notFoundHandler
};
