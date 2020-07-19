import {Error} from "src/common/error";

export class ResponseData<T> {
    public data: T
    public success: boolean
    public message: string
    public errors: Error[] = []

    constructor(success: boolean, message: string, data: any = null, errors: Error[] = []) {
        this.success = success;
        this.message = message;
        this.data = data;
        this.errors = errors;
    }

    static ok<T>(data: T): ResponseData<T> {
        return new ResponseData<T>(true, "", data)
    }

    static fail(message: string, errors: Error[]) {
        return new ResponseData<null>(false, message, null, errors);
    }
}