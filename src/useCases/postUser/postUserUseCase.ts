import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IPostUserRequest } from "./postUserDTO";
import { Response } from "../../utils/DTOs/implementations/Response";

export class PostUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    async execute(data: IPostUserRequest): Promise<Response> {
        return await this.usersRepository.post(data);
    }
}
