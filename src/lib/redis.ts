import { createClient } from "redis";
import "dotenv/config";

const redisConnection = process.env.REDIS_CONNECTION;

if (!redisConnection) {
  throw new Error("redis URL not provided");
}

export const redis = createClient({
  url: redisConnection,
});

redis.connect();
