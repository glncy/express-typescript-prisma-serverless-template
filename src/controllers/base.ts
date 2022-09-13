import { Request, Response } from "express";

export const baseViewController = (req: Request, res: Response) => {
  res.render("index");
};
