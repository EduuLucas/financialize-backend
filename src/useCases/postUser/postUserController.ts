import { Response } from "../../utils/DTOs/implementations/Response";
import { PostUserUseCase } from "./postUserUseCase";
import { Request } from "express";

export class PostUserController {
    constructor(private PostUserUseCase: PostUserUseCase) {}

    async handle(request: Request): Promise<Response> {
        console.log(request.body);
        return await this.PostUserUseCase.execute(request.body);
    }
}
