import { PostgreSQLUsersRepository } from "../../repositories/implementations/PostgreSQLUsersRepository";
import { PostUserController } from "./postUserController";
import { PostUserUseCase } from "./postUserUseCase";

const postgreSQLUsersRepository = new PostgreSQLUsersRepository();

const postUserUseCase = new PostUserUseCase(postgreSQLUsersRepository);

const postUserController = new PostUserController(postUserUseCase);

export { postUserUseCase, postUserController };
