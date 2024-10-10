import { IUsersRepository } from "../../repositories/IUsersRepository";
import { Response } from "../../utils/DTOs/implementations/Response";
import { IPutUserRequest } from "./putUserDTO";

export class PutUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    async execute(data: IPutUserRequest): Promise<Response> {
        return await this.usersRepository.put(data);
    }
}
