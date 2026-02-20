const express = require('express');
require('dotenv').config();
const userRoutes = require('./routes/users.routes');
const { errorHandler, notFoundHandler } = require('./middlewares/error.middleware');

const app = express();
app.use(express.json());
app.use('/users', userRoutes);
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});
app.use(notFoundHandler);
app.use(errorHandler);
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
