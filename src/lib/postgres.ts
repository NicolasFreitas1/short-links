import postgres from "postgres";
import "dotenv/config";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("Database URL not provided");
}

export const sql = postgres(databaseUrl);
