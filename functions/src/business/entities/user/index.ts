export class User {
    constructor (
        private id: string,
        private name: string,
        private email: string,
        private dateOfBirth: Date,
        private password: string,
        private photo: string,
    ){}
    
    public getId(): string {
        return this.id
    }
    
    public getName(): string {
        return this.name
    }

    public getEmail(): string {
        return this.email
    }

    public getDateOfBirth(): Date {
        return this.dateOfBirth
    }

    public getPassword(): string {
        return this.password
    }

    public getPhoto(): string {
        return this.photo
    }
}