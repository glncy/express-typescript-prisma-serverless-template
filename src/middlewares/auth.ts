import { Request, Response, NextFunction } from "express";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // TODO: Implementation of checking if user is authenticated
  res.locals.attributes = "USER_VIEW_ALL";
  next();
};
