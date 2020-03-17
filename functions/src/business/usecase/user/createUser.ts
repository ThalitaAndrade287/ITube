import { User } from './../../entities/user/index';
import { GenerateToken } from './../../gateway/auth/generateToken';
import { IdGeneratorGateway } from './../../gateway/auth/generateId';
import { RegisterUser } from './../../gateway/user/registerUser';

export class CreateUser {
    constructor(
        private registerUser: RegisterUser,
        private idGeneratorGateway: IdGeneratorGateway,
        private generateToken: GenerateToken
    ) {}

    async execute(input: Input){
        const id = this.idGeneratorGateway.generateId()

        const user = new User(id, input.name, input.email, input.dateOfBirth, input.password, input.photo)

        await this.registerUser.registerUser(user)

        return this.generateToken.generateToken(user)
    }
}

export interface Input {
    name: string,
    email: string,
    dateOfBirth: Date,
    password: string,
    photo: string,
}