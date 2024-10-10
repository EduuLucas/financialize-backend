import { IDelUserRequest } from "../useCases/delUser/delUserDTO";
import { IGetUserRequest } from "../useCases/getUser/getUserDTO";
import { ILoginUserRequest } from "../useCases/loginUser/loginUserDTO";
import { IPostUserRequest } from "../useCases/postUser/postUserDTO";
import { IPutUserRequest } from "../useCases/putUser/putUserDTO";
import { Response } from "../utils/DTOs/implementations/Response";

export interface IUsersRepository {
    get(data: IGetUserRequest): Promise<Response>;
    post(data: IPostUserRequest): Promise<Response>;
    login(data: ILoginUserRequest): Promise<Response>;
    put(data: IPutUserRequest): Promise<Response>;
    del(data: IDelUserRequest): Promise<Response>;
}
