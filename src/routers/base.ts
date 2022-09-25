import { Router, RouterImports } from "./";
import { Router as ExpressRouter } from "express";
import { baseViewController } from "@/controllers/base";

const router = ExpressRouter();
const basePath = "/";

const routes = ({}: RouterImports): ExpressRouter => {
  router.get("/", baseViewController);
  return router;
};

export const baseRouter: Router = {
  basePath,
  router: routes,
};
