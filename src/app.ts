import express, { Application, Request, Response } from 'express';
import 'dotenv/config';
import userRoutes from './routes/users.routes';
import { errorHandler, notFoundHandler } from './middlewares/error.middleware';

const app: Application = express();

app.use(express.json());
app.use('/users', userRoutes);
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hi there SPEC developers' });
});
app.use(notFoundHandler);
app.use(errorHandler);

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
