import * as dotenv from "dotenv";

dotenv.config();

export const HOST = process.env.HOST ?? "0.0.0.0";
export const PORT = parseInt(process.env.PORT ?? "3000");
export const RCON_HOST = process.env.RCON_HOST ?? "0.0.0.0";
export const RCON_PORT = parseInt(process.env.RCON_PORT ?? "25575");
export const RCON_PASSWORD = process.env.RCON_PASSWORD ?? "secret";
export const RCON_TIMEOUT = parseInt(process.env.RCON_TIMEOUT ?? "10000");
