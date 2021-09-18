import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { firebaseConfig } from './firebaseKeys' //Keys are this file
//Important imports, slight change in useage

const app = firebase.initializeApp(firebaseConfig) //now app cancommunicate to firebase

const db = app.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db } //named exports
