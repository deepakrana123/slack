// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBWt_xxR9AEN4wirEr_8A3vLDwkWUNNfIE",
	authDomain: "slack-c2e4f.firebaseapp.com",
	projectId: "slack-c2e4f",
	storageBucket: "slack-c2e4f.appspot.com",
	messagingSenderId: "169391996781",
	appId: "1:169391996781:web:f2db776a959208da07a464",
	measurementId: "G-NSKZWLG9S2"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  const provider=new firebase.auth.GoogleAuthProvider();


  export {auth,provider}

  export default db;
 
 
 
 
 
	