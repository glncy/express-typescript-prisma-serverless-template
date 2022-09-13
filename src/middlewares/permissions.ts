import { Request, Response, NextFunction } from "express";
import PermissionManager from "@/utils/PermissionManager";

export const hasPermission =
  (permission: string | string[], some: boolean = false) =>
  (req: Request, res: Response, next: NextFunction) => {
    const attributes: string = res.locals.attributes;
    PermissionManager.setAttributes(attributes || "");
    if (PermissionManager.hasPermission(permission, some)) {
      res.locals.PermissionManager = PermissionManager;
      next();
    } else {
      res.status(403).send("Unauthorized");
    }
  };
