import { Account } from "./Account";
import { Category } from "./Category";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import * as crypto from "crypto";

dotenv.config();

export class User {
    public readonly id: string;
    public cpf: string;
    public name: string;
    public email: string;
    public password: string;
    public readonly createdAt: Date;
    public updatedAt: Date;
    public accounts: Account[];
    public categories: Category[];

    constructor(props: User) {
        this.id = props.id;
        this.name = props.name;
        this.cpf = props.cpf;
        this.email = props.email;
        this.password = props.password;
        this.createdAt = props.createdAt;
        this.updatedAt = props.updatedAt;
        this.accounts = props.accounts;
        this.categories = props.categories;
    }

    static create(props: Omit<User, "id" | "createdAt" | "updatedAt" | "accounts" | "categories">): User {
        const now = new Date();
        const id = (0, crypto.randomUUID)();
        const hash = bcrypt.hashSync(props.password, Number(process.env.SALT_ROUNDS));
        const user = new User({
            id,
            name: props.name,
            cpf: props.cpf,
            email: props.email,
            password: hash,
            createdAt: now,
            updatedAt: now,
            accounts: [],
            categories: [],
        });
        return user;
    }
}
