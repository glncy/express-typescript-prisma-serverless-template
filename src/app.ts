import express, { Express } from "express";
import routers from "@/routers";
import path from "path";
import { renderFile } from "ejs";

// TypeORM imports
// import "reflect-metadata";
// import db from "@typeorm";

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

// TypeORM setup
// db.initialize()
//   .then(() => {
//     console.log("TypeORM connection initialized");
//   })
//   .catch((error) => {
//     console.log("TypeORM connection failed to initialize");
//     console.log(error);
//   });

export default app;
