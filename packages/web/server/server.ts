import * as express from "express";
import * as next from "next";
import routes from "../routes";

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const server = express();

const app = next({
  dev,
});

const handle = routes.getRequestHandler(app);

export async function start() {
  await app.prepare();

  server.get("*", handle);

  server.listen(port, (err: any) => {
    if (err) {
      throw err;
    }

    // tslint:disable-next-line no-console
    console.log(`> Ready on http://fuzlin.local`);
  });
}
