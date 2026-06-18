import express, { type Express } from "express";
import { createServer } from "http";
import { registerRoutes } from "./routes";

// Builds the Express app (routes + middleware) without starting a listener.
// Used by the Vercel serverless entry point, which bundles this file into a
// single self-contained module so there are no cross-file imports to resolve
// at runtime.
export async function createApp(): Promise<Express> {
  const app = express();

  app.use(
    express.json({
      verify: (req, _res, buf) => {
        (req as unknown as { rawBody: Buffer }).rawBody = buf;
      },
    }),
  );
  app.use(express.urlencoded({ extended: false }));

  const httpServer = createServer(app);
  await registerRoutes(httpServer, app);

  return app;
}
