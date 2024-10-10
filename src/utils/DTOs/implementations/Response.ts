export class Response {
    public data: any;
    public has_error: boolean;
    public error: string;

    constructor(data: any, has_error: boolean, error: string) {
        this.data = data;
        this.has_error = has_error;
        this.error = error;
    }
}
