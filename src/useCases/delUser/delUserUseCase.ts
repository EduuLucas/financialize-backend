import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IDelUserRequest } from "./delUserDTO";
import { Response } from "../../utils/DTOs/implementations/Response";

export class DelUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    async execute(data: IDelUserRequest): Promise<Response> {
        return await this.usersRepository.del(data);
    }
}
