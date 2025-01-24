import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import { getEnvVar } from "./utils";
import postgres from "postgres";

export const client = postgres(getEnvVar("DATABASE_URL"));
export const db = drizzle(client, { schema, logger: true });
