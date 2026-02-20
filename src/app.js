const express = require('express');
const userRoutes = require('./routes/users.routes');
const { errorHandler, notFoundHandler } = require('./middlewares/error.middleware');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

// Error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

// Start server if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
