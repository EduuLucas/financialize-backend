import { UserProps } from "../../models/user";

export interface IPutUserRequest extends UserProps {
    id: string;
}
