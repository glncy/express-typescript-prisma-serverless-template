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

// insert routers here
const routers: Router[] = [baseRouter];

// api routers
const apiRouters: Router[] = [];

export default initializeRouters([...routers, ...apiRouters], imports);
