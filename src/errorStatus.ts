export class ErrorStatus extends Error {
    constructor(message: string, public status: number){
        
        super(message);
        this.status = status;
        this.message = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}