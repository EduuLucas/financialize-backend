import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export interface UserProps {
    name: string;
    cpf: string;
    password: string;
    email: string;
    user_token?: string;
}

export class User {
    public readonly id?: string;
    public readonly created_at?: Date;
    public readonly updated_at?: Date;
    public cpf: string;
    public name: string;
    public email: string;
    public password: string;
    public user_token?: string;

    constructor(props: UserProps) {
        const hash = bcrypt.hashSync(props.password, Number(process.env.SALT_ROUNDS));
        this.name = props.name;
        this.cpf = props.cpf;
        this.email = props.email;
        this.password = hash;
    }
}
