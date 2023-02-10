import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHQPxOw_S0A8LX05xCtfWsqkv3uOgfCoU",
  authDomain: "meido-376511.firebaseapp.com",
  projectId: "meido-376511",
  storageBucket: "meido-376511.appspot.com",
  messagingSenderId: "313984327977",
  appId: "1:313984327977:web:b95e9e7591bdb5e4f61738",
  measurementId: "G-ZBYNKRQZ9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);








// // Initialize Google auth
// const provider = new GoogleAuthProvider();

// signInWithRedirect(auth, provider);
// getRedirectResult(auth)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;

//     // The signed-in user info.
//     const user = result.user;
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });






// Cloud firestore serviece
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//const db = getFirestore(app);

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }