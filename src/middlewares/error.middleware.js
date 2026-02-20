// Centralized error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.message);
  
  // Default error status and message
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
    message: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

// Middleware to handle 404 - Route not found
const notFoundHandler = (req, res) => {
  res.status(404).json({ message: 'Route not found' });
};

module.exports = {
  errorHandler,
  notFoundHandler
};
