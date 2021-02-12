import { UserDatabase } from "./src/database/user";
import { CreateUser } from "./src/business/usecase/user/createUser";
import * as functions from "firebase-functions";
import * as express from "express";
import { Request, Response } from "express";
import * as cors from "cors";
import * as admin from "firebase-admin";
import * as firebase from "firebase";
import IdGenerator from "./src/services/idGenerator";
import FirebaseAutenticationGenerateToken from "./src/services/firebaseAutentication";
import { firebaseConfig } from "./firebaseConfig";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

admin.initializeApp();

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
