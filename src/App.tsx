import React from "react";
import "./App.css";
import { getLocation } from "./helpers/services";
import Dashboard from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./pages/Signin";
import SharedNotes from "./pages/Sharednotes";
import { Spinner } from "./layout/styles";
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

function App() {
  const [user, loading] = useAuthState(auth);
  const [myLocation, setMyLocation] = React.useState("");

  React.useEffect(() => {
    //Get user location
    getLocation().then((res) => {
      setMyLocation(`Country : ${res.data.country}

Continent : ${res.data.continent}`);
    });
  }, []);
  //authentication using google auth to sign in
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  const notesRef = firebase.firestore().collection("notes");

  return (
    <Router>
      <Switch>
        {/* only allow user to access the applicattion when he is logged using auth */}
        {user && (
          <>
            <Route
              path="/home"
              exact={true}
              component={() => (
                <Dashboard
                  user={user}
                  fireBaseRef={notesRef}
                  signOut={() => auth.signOut()}
                  myLocation={myLocation}
                />
              )}
            />
            <Route
              path="/shared_notes"
              exact={true}
              component={() => <SharedNotes />}
            />
          </>
        )}
        {/* show sign in page whne not authenticated */}
        {!user && (
          <>
            <Route
              path="/signin"
              exact={true}
              component={() =>
                loading ? (
                  <Spinner />
                ) : (
                  <SignIn signInWithGoogle={signInWithGoogle} />
                )
              }
            />
          </>
        )}
      </Switch>
      {/* redirect to routes upon signin changes */}
      {user && <Redirect to="/home" />}
      {!user && <Redirect to="/signin" />}
    </Router>
  );
}

export default App;
