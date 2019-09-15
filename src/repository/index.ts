import firebase from 'firebase/app';
import 'firebase/database';
import config from '../config/firebase.config';

firebase.initializeApp(config);
export const database = firebase.database();

export default database;
