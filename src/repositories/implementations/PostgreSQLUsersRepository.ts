import { IUsersRepository } from "../IUsersRepository";
import { Response } from "../../utils/DTOs/implementations/Response";
import bcrypt from "bcrypt";
import signJWT from "../../utils/auth/SignJWT";
import prisma from "../../database/database";
import { IPostUserRequest } from "../../useCases/postUser/postUserDTO";
import { IGetUserRequest } from "../../useCases/getUser/getUserDTO";
import { IDelUserRequest } from "../../useCases/delUser/delUserDTO";
import { ILoginUserRequest } from "../../useCases/loginUser/loginUserDTO";
import { WrongCPFOrPasswordError } from "../../models/errors/WrongCPFOrPasswordError";
import { IPutUserRequest } from "../../useCases/putUser/putUserDTO";
import { User } from "../../models/entities/User";

export class PostgreSQLUsersRepository implements IUsersRepository {
    async get(data: IGetUserRequest): Promise<Response> {
        const results = await prisma.user.findMany({
            where: {
                OR:[
                    { cpf: data.cpf },
                    { email: data.email },
                    { id: data.id },
                ]
            },
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
        try {
            const finalUser = User.create(data);
            // Map domain User to Prisma create input to avoid type mismatch (exclude nested relations)
            const prismaUser = {
                name: finalUser.name,
                cpf: finalUser.cpf,
                email: finalUser.email,
                password: finalUser.password,
            };
            const results = await prisma.user.create({
                data: prismaUser,
            });
            return new Response(results, false, "");
        } catch (error) {
            console.log(error)
            return new Response(error, true, "Error creating user");
        }
    }
    async put(data: IPutUserRequest): Promise<Response> {
        const results = await prisma.user.update({
            where: {
                id: data.id,
            },
            data: {
                email: data.email,
                name: data.name,
            },
        });
        return new Response(results, false, "");
    }
    async del(data: IDelUserRequest): Promise<Response> {
        const results = await prisma.user.delete({
            where: {
                id: data.id,
                cpf: data.cpf,
            },
        });
        return new Response(results, false, "");
    }
    async login(data: ILoginUserRequest): Promise<Response> {
        try {
            const user = await prisma.user
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
                user.access_token = signJWT(user.id);
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
