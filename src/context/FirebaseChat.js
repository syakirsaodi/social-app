import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

import config from "../config/firebase";

let app;
if(firebase.apps.length ===0){
    app = firebase.initializeApp(config);
}else{
    app = firebase.app()
}
const db=app.firestore();
const auth = firebase.auth();
export {db,auth};