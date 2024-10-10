import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ILoginUserRequest } from "./loginUserDTO";
import { Response } from "../../utils/DTOs/implementations/Response";

export class LoginUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    async execute(data: ILoginUserRequest): Promise<Response> {
        return await this.usersRepository.login(data);
    }
}
