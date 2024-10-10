export class WrongCPFOrPasswordError extends Error {
    public code: number = 1;
    public name: string = "User not found or wrong password";

    constructor() {
        super();
    }
}
