import { PostgreSQLUsersRepository } from "../../repositories/implementations/PostgreSQLUsersRepository";
import { LoginUserController } from "./loginUserController";
import { LoginUserUseCase } from "./loginUserUseCase";

const postgreSQLUsersRepository = new PostgreSQLUsersRepository();

const loginUserUseCase = new LoginUserUseCase(postgreSQLUsersRepository);

const loginUserController = new LoginUserController(loginUserUseCase);

export { loginUserUseCase, loginUserController };
