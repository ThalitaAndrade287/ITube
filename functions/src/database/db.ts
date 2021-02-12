import * as admin from 'firebase-admin';

export let db = () => { return admin.firestore() }