import firebase from 'firebase/app';
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCo1ibcLQ80oVl92iqU9mkkThNFU21oKQg",
    authDomain: "vuecli-daril.firebaseapp.com",
    projectId: "vuecli-daril",
    storageBucket: "vuecli-daril.appspot.com",
    messagingSenderId: "242606210160",
    appId: "1:242606210160:web:c0a30562dad407fae708b5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database()
  const MenuRef = db.ref('menu')