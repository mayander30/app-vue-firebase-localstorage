import Firebase from 'firebase'
import 'firebase/firestore'

let config = {
  apiKey: "AIzaSyBM2DKTvVmuCFOat8_QD6cXU8kGc158leQ",
  authDomain: "vueapp-b1331.firebaseapp.com",
  databaseURL: "https://vueapp-b1331.firebaseio.com",
  projectId: "vueapp-b1331",
  storageBucket: "vueapp-b1331.appspot.com",
  messagingSenderId: "259259717619"
};

let app = Firebase.initializeApp(config);

// firebase utils
const db = app.database()

// firebase collections
//const usersCollection = db.collection('users')
//const beersCollection = db.collection('beers')

export {
    db,
    //beersCollection
}
