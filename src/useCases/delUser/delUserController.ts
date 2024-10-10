import { Response } from "../../utils/DTOs/implementations/Response";
import { DelUserUseCase } from "./delUserUseCase";
import { Request } from "express";

export class DelUserController {
    constructor(private DelUserUseCase: DelUserUseCase) {}

    async handle(request: Request): Promise<Response> {
        return await this.DelUserUseCase.execute(request.query);
    }
}
