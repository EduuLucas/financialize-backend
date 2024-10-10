import express, { Express } from "express";
import users_routes from "./users";

const core_routes: Express = express();

core_routes.use(users_routes);

export default core_routes;
