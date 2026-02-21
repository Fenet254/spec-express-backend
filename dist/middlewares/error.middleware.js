"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.message);
    const status = err.status || 500;
    const message = (process.env.NODE_ENV === 'production')
        ? 'Internal Server Error'
        : err.message || 'Internal Server Error';
    const response = {
        message: message
    };
    if (process.env.NODE_ENV === 'development') {
        response.stack = err.stack;
    }
    res.status(status).json(response);
};
exports.errorHandler = errorHandler;
const notFoundHandler = (req, res) => {
    res.status(404).json({ message: 'Route not found' });
};
exports.notFoundHandler = notFoundHandler;
//# sourceMappingURL=error.middleware.js.map