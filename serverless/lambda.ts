import { APIGatewayProxyEvent, Context } from "aws-lambda";
import ServerlessHttp from "serverless-http";
import app from "@/app";

const serverless = ServerlessHttp(app);

export async function handler(event: APIGatewayProxyEvent, context: Context) {
  event.path = event.path === "" ? "/" : event.path;
  const result = await serverless(event, context);
  return result;
}
