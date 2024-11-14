import webpack from "webpack";
import { serve } from "@hono/node-server";
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from "hono";
import devMiddleware from "webpack-dev-middleware";
import webpackConfig from "./webpack.config.js";

const compiler = webpack(webpackConfig as any);
const devMiddlewareOptions = {
    /** Your webpack-dev-middleware-options */
    writeToDisk: true
};

const app = new Hono();
app.get("/test", async (c) =>{
     return c.text("hello world")
    });
app.use((devMiddleware.honoWrapper as any)(compiler, devMiddlewareOptions));
app.use('*', serveStatic({ root: './dist' }))
serve(app, (info) => {
    console.log(`Listening on http://localhost:${info.port}`) // Listening on http://localhost:3000
})