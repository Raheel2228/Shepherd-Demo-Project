import React from "react";
import "./App.css";
import { getLocation } from "./helpers/services";
import { Dashboard } from "./pages/Dashboard";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { MyButton } from "./commons/Buttons";

import { SignIn } from "./pages/Signin";
firebase.initializeApp({
  // my config
  apiKey: "AIzaSyC1M02vfL2lRn0u8XOVOXKQg0KXLQbzGqw",
  authDomain: "shepherd-demo-project.firebaseapp.com",
  projectId: "shepherd-demo-project",
  storageBucket: "shepherd-demo-project.appspot.com",
  messagingSenderId: "464344988672",
  appId: "1:464344988672:web:e76ba2e161997cc7f7ace5",
  measurementId: "G-49F9EK79P0",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();
function App() {
  const [user] = useAuthState(auth);
  const notesRef = firebase.firestore().collection("notes");
  const [myLocation, setMyLocation] = React.useState("");
  const [myNotes, setMyNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    getLocation().then((res) => {
      setMyLocation(`Country : ${res.data.country}

Continent : ${res.data.continent}`);
    });
  }, []);
  React.useEffect(() => {
    if (user) {
      const { uid } = user;
      notesRef
        .where("user_id", "==", uid)
        .get()
        .then((snapshot) => {
          let userNote = snapshot.docs.map((doc) => {
            return doc.data();
          });
          setMyNotes(userNote);
          setLoading(true);
        });
    }
  }, [user]);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      {user ? (
        loading ? (
          <Dashboard
            myNotes={myNotes}
            signOut={() => auth.signOut()}
            myLocation={myLocation}
          />
        ) : (
          <></>
        )
      ) : (
        <SignIn signInWithGoogle={signInWithGoogle} />
      )}
    </>
  );
}

export default App;
