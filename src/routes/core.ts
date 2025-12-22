import express, { Express } from "express";
import users_routes from "./users";
import swagger_routes from "../docs/swagger";

const core_routes: Express = express();

core_routes.use(users_routes);
core_routes.use(swagger_routes);

export default core_routes;
