import { Response } from "../../utils/DTOs/implementations/Response";
import { LoginUserUseCase } from "./loginUserUseCase";
import { Request } from "express";

export class LoginUserController {
    constructor(private LoginUserUseCase: LoginUserUseCase) {}

    async handle(request: Request): Promise<Response> {
        return await this.LoginUserUseCase.execute(request.body);
    }
}
