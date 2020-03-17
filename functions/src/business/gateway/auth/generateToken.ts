import { User } from './../../entities/user/index';

export interface GenerateToken {
    generateToken(user: User): Promise<string | undefined>
}