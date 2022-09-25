import { Router, RouterImports } from "./";
import { Router as ExpressRouter } from "express";
import { baseViewController } from "@/controllers/base";
import { User } from "@/entities/User";

const router = ExpressRouter();
const basePath = "/";

const routes = ({}: RouterImports): ExpressRouter => {
  router.get("/", async () => {
    const user = await User.find();
  });
  return router;
};

export const baseRouter: Router = {
  basePath,
  router: routes,
};
