import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  // Don't crash on import (e.g. during a serverless cold start before env vars
  // are configured). Database-backed routes will fail clearly at query time
  // until DATABASE_URL is set in the deployment environment.
  console.warn(
    "[db] DATABASE_URL is not set. Database-backed API routes will fail until it is configured.",
  );
}

const sql = neon(connectionString ?? "postgresql://invalid:invalid@localhost/invalid");
export const db = drizzle(sql);
