// Vercel serverless entry point.
//
// On Replit the app runs as a single long-lived Express server (see
// server/index.ts). Vercel instead runs serverless functions, so this file
// wraps the same Express routes as an on-demand handler. Every request to
// /api/* is routed here and handled by Express exactly as it is in dev.
import express, { type Express } from "express";

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

  // Import lazily so any module-resolution problem surfaces as a handled
  // 500 with a readable message instead of an opaque FUNCTION_INVOCATION_FAILED.
  const { createServer } = await import("http");
  const { registerRoutes } = await import("../server/routes");

  const httpServer = createServer(app);
  await registerRoutes(httpServer, app);

  return app;
}

export default async function handler(
  req: express.Request,
  res: express.Response,
) {
  try {
    if (!appPromise) {
      appPromise = getApp();
    }
    const app = await appPromise;
    return (app as unknown as (req: unknown, res: unknown) => void)(req, res);
  } catch (err) {
    // Reset so a transient failure can retry on the next invocation.
    appPromise = null;
    const message = err instanceof Error ? err.message : String(err);
    const stack = err instanceof Error ? err.stack : undefined;
    res.statusCode = 500;
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ error: "api_init_failed", message, stack }));
  }
}
