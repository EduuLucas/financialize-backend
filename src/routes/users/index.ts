import express, { Express, Request, Response } from "express";
import { postUserController } from "../../useCases/postUser";
import { getUserController } from "../../useCases/getUser";
import { delUserController } from "../../useCases/delUser";
import { loginUserController } from "../../useCases/loginUser";
import { putUserController } from "../../useCases/putUser";

const users_routes: Express = express();

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Get users
 *     requestQuery:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IGetUserRequest'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseDTO'
 */
users_routes.get("/users", (req: Request, res: Response) => {
    getUserController.handle(req).then((result) => {
        if (result.has_error) return res.status(400).json(result);
        return res.status(200).json(result);
    });
});
/**
 * @openapi
 * /users:
 *   post:
 *     summary: Create a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IPostUserRequest'
 *     responses:
 *       200:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseDTO'
 */
users_routes.post("/users", (req: Request, res: Response) => {
    postUserController.handle(req).then((result) => {
        if (result.has_error) return res.status(400).json(result);
        return res.status(200).json(result);
    });
});
/**
 * @openapi
 * /users/login:
 *   post:
 *     summary: Login user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ILoginUserRequest'
 *     responses:
 *       200:
 *         description: Logged in
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseDTO'
 */
users_routes.post("/users/login", (req: Request, res: Response) => {
    loginUserController.handle(req).then((result) => {
        if (result.has_error) return res.status(400).json(result);
        return res.status(200).json(result);
    });
});
/**
 * @openapi
 * /users:
 *   put:
 *     summary: Update a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IPutUserRequest'
 *     responses:
 *       200:
 *         description: Updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseDTO'
 */
users_routes.put("/users", (req: Request, res: Response) => {
    putUserController.handle(req).then((result) => {
        if (result.has_error) return res.status(400).json(result);
        return res.status(200).json(result);
    });
});
/**
 * @openapi
 * /users:
 *   delete:
 *     summary: Delete a user
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IDelUserRequest'
 *     responses:
 *       200:
 *         description: Deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResponseDTO'
 */
users_routes.delete("/users", (req: Request, res: Response) => {
    delUserController.handle(req).then((result) => {
        if (result.has_error) return res.status(400).json(result);
        return res.status(200).json(result);
    });
});

export default users_routes;
