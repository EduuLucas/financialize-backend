import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IGetUserRequest } from "./getUserDTO";
import { Response } from "../../utils/DTOs/implementations/Response";

export class GetUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    async execute(data: IGetUserRequest): Promise<Response> {
        return await this.usersRepository.get(data);
    }
}
