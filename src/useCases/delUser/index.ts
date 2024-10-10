import { PostgreSQLUsersRepository } from "../../repositories/implementations/PostgreSQLUsersRepository";
import { DelUserController } from "./delUserController";
import { DelUserUseCase } from "./delUserUseCase";

const postgreSQLUsersRepository = new PostgreSQLUsersRepository();

const delUserUseCase = new DelUserUseCase(postgreSQLUsersRepository);

const delUserController = new DelUserController(delUserUseCase);

export { delUserUseCase, delUserController };
