import { Response } from "../../utils/DTOs/implementations/Response";
import { PutUserUseCase } from "./putUserUseCase";
import { Request } from "express";

export class PutUserController {
    constructor(private PutUserUseCase: PutUserUseCase) {}

    async handle(request: Request): Promise<Response> {
        return await this.PutUserUseCase.execute(request.body);
    }
}
