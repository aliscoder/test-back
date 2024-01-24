import express from "express";
import http from "http";
import routes from "./startup/routes";
import server from "./startup/server";

const app = express();
export const HTTPserver = http.createServer(app);


routes(app);
server(HTTPserver);
