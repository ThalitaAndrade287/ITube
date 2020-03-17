import { User } from './../business/entities/user/index';
import { RegisterUser } from './../business/gateway/user/registerUser';
import { db } from './db';

export class UserDatabase implements RegisterUser {
    async registerUser(user: User): Promise <any> {
        await db.collection("users").doc().set({
            id: user.getId(), 
            name: user.getName(), 
            email: user.getEmail(), 
            dateOfBirth: user.getDateOfBirth(), 
            password: user.getPassword(), 
            photo: user.getPhoto()
        })
    }
}