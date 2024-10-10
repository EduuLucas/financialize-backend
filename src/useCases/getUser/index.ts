import { PostgreSQLUsersRepository } from "../../repositories/implementations/PostgreSQLUsersRepository";
import { GetUserController } from "./getUserController";
import { GetUserUseCase } from "./getUserUseCase";

const postgreSQLUsersRepository = new PostgreSQLUsersRepository();

const getUserUseCase = new GetUserUseCase(postgreSQLUsersRepository);

const getUserController = new GetUserController(getUserUseCase);

export { getUserUseCase, getUserController };
