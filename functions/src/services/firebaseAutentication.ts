import { User } from './../business/entities/user/index';
import { GenerateToken } from './../business/gateway/auth/generateToken';
import * as firebase from 'firebase';

export default class FirebaseAutenticationGenerateToken implements GenerateToken {
    async generateToken(user: User): Promise<string | undefined> {
        const createdUser = await firebase.auth().createUserWithEmailAndPassword(user.getEmail(), user.getPassword());

        if (createdUser.user) {
            return createdUser.user.getIdToken()
        } else {
            throw new Error("Não foi possível criar um usuário")
        }
    }
}