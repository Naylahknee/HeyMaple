// Vercel serverless entry point.
//
// On Replit the app runs as a single long-lived Express server (see
// server/index.ts). Vercel instead runs serverless functions, so this file
// wraps the same Express routes as an on-demand handler. Every request to
// /api/* is routed here and handled by Express exactly as it is in dev.
import express, { type Express } from "express";
import { createServer } from "http";
import { registerRoutes } from "../server/routes";

let appPromise: Promise<Express> | null = null;

async function getApp(): Promise<Express> {
  const app = express();

  app.use(
    express.json({
      verify: (req, _res, buf) => {
        (req as unknown as { rawBody: Buffer }).rawBody = buf;
      },
    }),
  );
  app.use(express.urlencoded({ extended: false }));

  // registerRoutes only uses the http server for its return value here, but we
  // create one to keep the same signature the rest of the app expects.
  const httpServer = createServer(app);
  await registerRoutes(httpServer, app);

  return app;
}

export default async function handler(
  req: express.Request,
  res: express.Response,
) {
  if (!appPromise) {
    appPromise = getApp();
  }
  const app = await appPromise;
  return (app as unknown as (req: unknown, res: unknown) => void)(req, res);
}
