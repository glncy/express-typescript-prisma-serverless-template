import app from "@/app";
import dotenv from "dotenv";

const environment = process.env.NODE_ENV || "development";
if (environment === "development") {
  dotenv.config();
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
