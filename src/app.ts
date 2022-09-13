import express, { Express } from "express";
import routers from "@/routers";
import path from "path";
import { renderFile } from "ejs";

const app: Express = express();

// view engine setup
app.engine("ejs", renderFile);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// static files setup
app.use(express.static(path.join(__dirname, "public")));

// routers setup
routers.map(({ basePath, router }) => {
  app.use(basePath, router);
});

export default app;
