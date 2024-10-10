import { IUsersRepository } from "../IUsersRepository";
import { Response } from "../../utils/DTOs/implementations/Response";
import { User } from "../../models/user";
import bcrypt from "bcrypt";
import signJWT from "../../utils/auth/SignJWT";
import prisma from "../../database/database";
import { IPostUserRequest } from "../../useCases/postUser/postUserDTO";
import { IGetUserRequest } from "../../useCases/getUser/getUserDTO";
import { IDelUserRequest } from "../../useCases/delUser/delUserDTO";
import { ILoginUserRequest } from "../../useCases/loginUser/loginUserDTO";
import { WrongCPFOrPasswordError } from "../../models/errors/WrongCPFOrPasswordError";
import { IPutUserRequest } from "../../useCases/putUser/putUserDTO";

export class PostgreSQLUsersRepository implements IUsersRepository {
    async get(data: IGetUserRequest): Promise<Response> {
        const results = await prisma.users.findMany({
            where: data,
            select: {
                name: true,
                cpf: true,
                email: true,
                password: data.withPassword,
            },
        });
        return new Response(results, false, "");
    }
    async post(data: IPostUserRequest): Promise<Response> {
        console.log(data);
        const finalUser = new User(data);
        const results = await prisma.users.create({
            data: finalUser,
        });
        return new Response(results, false, "");
    }
    async put(data: IPutUserRequest): Promise<Response> {
        const results = await prisma.users.update({
            where: {
                id: data.id,
            },
            data: {
                cpf: data.cpf,
                email: data.email,
                name: data.name,
            },
        });
        return new Response(results, false, "");
    }
    async del(data: IDelUserRequest): Promise<Response> {
        const results = await prisma.users.delete({
            where: {
                id: data.id,
                cpf: data.cpf,
            },
        });
        return new Response(results, false, "");
    }
    async login(data: ILoginUserRequest): Promise<Response> {
        try {
            const user = await prisma.users
                .findFirstOrThrow({
                    where: {
                        cpf: data.cpf,
                    },
                })
                .catch(() => {
                    throw new WrongCPFOrPasswordError();
                });
            const match = bcrypt.compareSync(data.password, user.password);
            if (match) {
                user.user_token = signJWT(user.id);
                this.put(user);
                user.password = "";
                return new Response({ user }, false, "");
            } else {
                throw new WrongCPFOrPasswordError();
            }
        } catch (error) {
            return new Response(error, true, "´{error}´");
        }
    }
}
