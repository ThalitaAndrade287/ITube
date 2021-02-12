import { User } from './../../entities/user/index';

export interface RegisterUser{
    registerUser(user: User): Promise<any>
}