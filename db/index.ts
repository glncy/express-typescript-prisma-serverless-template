import dotenv from "dotenv";
import { DataSource } from "typeorm";
import * as entities from "@/entities";

const environment = process.env.NODE_ENV || "development";
if (environment === "development") {
  dotenv.config();
}

const db = new DataSource({
  type: (process.env.TYPEORM_DB_TYPE || "mysql") as any,
  host: process.env.TYPEORM_DB_HOST,
  port: Number(process.env.TYPEORM_DB_PORT),
  username: process.env.TYPEORM_DB_USERNAME,
  password: process.env.TYPEORM_DB_PASSWORD,
  database: process.env.TYPEORM_DB_NAME,
  entities,
  migrations: ["dist/db/migrations/**/*.js"],
});

export default db;
