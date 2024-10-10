import express, { Express } from "express";
import dotenv from "dotenv";
import core_routes from "./routes/core";
var bodyParser = require("body-parser");

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(core_routes);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
