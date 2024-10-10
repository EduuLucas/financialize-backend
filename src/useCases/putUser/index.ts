import { PostgreSQLUsersRepository } from "../../repositories/implementations/PostgreSQLUsersRepository";
import { PutUserController } from "./putUserController";
import { PutUserUseCase } from "./putUserUseCase";

const postgreSQLUsersRepository = new PostgreSQLUsersRepository();

const putUserUseCase = new PutUserUseCase(postgreSQLUsersRepository);

const putUserController = new PutUserController(putUserUseCase);

export { putUserUseCase, putUserController };
