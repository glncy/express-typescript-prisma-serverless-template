import { Router as ExpressRouter } from "express";
import { baseRouter } from "./base";
import multer, { StorageEngine, Multer } from "multer";
import { initializeRouters } from "@/utils/initializeRouters";

// interfaces
export interface RouterImports {
  upload: Multer;
}

export interface Router {
  basePath: string;
  router: (imports: RouterImports) => ExpressRouter;
}

const storage: StorageEngine = multer.memoryStorage();
const upload: Multer = multer({ storage });

const imports: RouterImports = {
  upload,
};

const apiRoutes: Router[] = [];

const routers: Router[] = [baseRouter, ...apiRoutes];

export default initializeRouters(routers, imports);
