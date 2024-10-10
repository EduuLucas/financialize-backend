import express, { Express, Request, Response } from "express";
import { postUserController } from "../../useCases/postUser";
import { getUserController } from "../../useCases/getUser";
import { delUserController } from "../../useCases/delUser";
import { loginUserController } from "../../useCases/loginUser";
import { putUserController } from "../../useCases/putUser";

const users_routes: Express = express();

users_routes.get("/users", (req: Request, res: Response) => {
    getUserController.handle(req).then((result) => {
        if (result.has_error) return res.status(400).json(result);
        return res.status(200).json(result);
    });
});
users_routes.post("/users", (req: Request, res: Response) => {
    postUserController.handle(req).then((result) => {
        if (result.has_error) return res.status(400).json(result);
        return res.status(200).json(result);
    });
});
users_routes.post("/users/login", (req: Request, res: Response) => {
    loginUserController.handle(req).then((result) => {
        if (result.has_error) return res.status(400).json(result);
        return res.status(200).json(result);
    });
});
users_routes.put("/users", (req: Request, res: Response) => {
    putUserController.handle(req).then((result) => {
        if (result.has_error) return res.status(400).json(result);
        return res.status(200).json(result);
    });
});
users_routes.delete("/users", (req: Request, res: Response) => {
    delUserController.handle(req).then((result) => {
        if (result.has_error) return res.status(400).json(result);
        return res.status(200).json(result);
    });
});

export default users_routes;
