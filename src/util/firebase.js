import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAcG8SJ67gqWbXDWN7oAhR3Ax4-NNaHJBM",
    authDomain: "react-demo-ace53.firebaseapp.com",
    databaseURL: "https://react-demo-ace53-default-rtdb.firebaseio.com",
    projectId: "react-demo-ace53",
    storageBucket: "react-demo-ace53.appspot.com",
    messagingSenderId: "968561313279",
    appId: "1:968561313279:web:190531b64f25c4044593ca"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase;

