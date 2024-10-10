import { Response } from "../../utils/DTOs/implementations/Response";
import { GetUserUseCase } from "./getUserUseCase";
import { Request } from "express";

export class GetUserController {
    constructor(private GetUserUseCase: GetUserUseCase) {}

    async handle(request: Request): Promise<Response> {
        return await this.GetUserUseCase.execute(request.query);
    }
}
