import { NextFunction, Request, Response } from "express";

class HttpException extends Error {
  status?: number;
  message: string;
  error: string | null;

  constructor(message: string, status: number, error: string | null) {
    super(message);
    this.status = status;
    this.message = message;
    this.error = error || null;
  }
}
export const errorHandler = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";

  res.status(status).json({
    message: message,
    stack: err.stack,
  });
};
