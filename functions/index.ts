import { UserDatabase } from "./src/database/user";
import { CreateUser } from "./src/business/usecase/user/createUser";
import * as functions from "firebase-functions";
import * as express from "express";
import { Request, Response } from "express";
import * as cors from "cors";
import * as admin from "firebase-admin";
import * as firebase from 'firebase-admin';
import IdGenerator from "./src/services/idGenerator";
import FirebaseAutenticationGenerateToken from "./src/services/firebaseAutentication";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

const firebaseConfig = {
  apiKey: "AIzaSyCXEGBBWv0PND3tiYa8FD94dM9pmnNiJUQ",
  authDomain: "itube-back-end.firebaseapp.com",
  databaseURL: "https://itube-back-end.firebaseio.com",
  projectId: "itube-back-end",
  storageBucket: "itube-back-end.appspot.com",
  messagingSenderId: "234573862207",
  appId: "1:234573862207:web:c15248dd3b52191b50af8a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

admin.initializeApp({
    credential: admin.credential.cert(require('/Thalita/Documentos/TCC - F4/ITube/functions/itube-back-end-firebase-adminsdk-rkxnq-095041f20a.json'))
});

const app = express();

app.use(cors({ origin: true }));

app.post("/signup", async (req: Request, res: Response) => {
  try {
    const createUser = new CreateUser(
      new UserDatabase(),
      new IdGenerator(),
      new FirebaseAutenticationGenerateToken()
    );
    const result = await createUser.execute({
      name: req.body.name,
      email: req.body.email,
      dateOfBirth: req.body.dateOfBirth,
      password: req.body.password,
      photo: req.body.photo
    });
    res.status(200).send({ result, message: "Usuário criado com sucesso" });
  } catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

exports.app = functions.https.onRequest(app);