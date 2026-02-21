import { Request, Response, NextFunction } from 'express';

interface ErrorWithStatus extends Error {
  status?: number;
}

const errorHandler = (err: ErrorWithStatus, req: Request, res: Response, next: NextFunction): void => {
  console.error('Error:', err.message);
  const status = err.status || 500;
  const message = (process.env.NODE_ENV === 'production')
    ? 'Internal Server Error'
    : err.message || 'Internal Server Error';

  const response: { message: string; stack?: string } = {
    message: message
  };

  if (process.env.NODE_ENV === 'development') {
    response.stack = err.stack;
  }

  res.status(status).json(response);
};

const notFoundHandler = (req: Request, res: Response): void => {
  res.status(404).json({ message: 'Route not found' });
};

export {
  errorHandler,
  notFoundHandler
};
