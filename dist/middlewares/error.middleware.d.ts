import { Request, Response, NextFunction } from 'express';
interface ErrorWithStatus extends Error {
    status?: number;
}
declare const errorHandler: (err: ErrorWithStatus, req: Request, res: Response, next: NextFunction) => void;
declare const notFoundHandler: (req: Request, res: Response) => void;
export { errorHandler, notFoundHandler };
//# sourceMappingURL=error.middleware.d.ts.map