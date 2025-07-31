import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Signup from "./Signup";
import Signin from "./Signin";
import Home from "./Home";
import { onAuthStateChanged } from "firebase/auth";
import { loginSuccess, logout } from "./redux/actions/authActions";
import { auth } from "./firebase";
import Profile from "./Profile";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  if (!user) {
    return <Navigate to="/signin" />;
  }
  return children;
};

const FirebaseError = () => (
  <div className="flex flex-col h-screen justify-center items-center gap-6 p-8 text-center">
    <h1 className="text-2xl font-bold text-red-600">Configuration Error</h1>
    <p className="text-gray-600 max-w-md">
      Firebase is not properly configured. Please check your environment variables and ensure all Firebase configuration is set up correctly.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg text-sm text-left">
      <p className="font-semibold mb-2">Required environment variables:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>VITE_FIREBASE_API_KEY</li>
        <li>VITE_FIREBASE_AUTH_DOMAIN</li>
        <li>VITE_FIREBASE_PROJECT_ID</li>
        <li>VITE_FIREBASE_STORAGE_BUCKET</li>
        <li>VITE_FIREBASE_MESSAGING_SENDER_ID</li>
        <li>VITE_FIREBASE_APP_ID</li>
      </ul>
    </div>
  </div>
);

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [firebaseError, setFirebaseError] = useState(false);

  useEffect(() => {
    // Check if Firebase auth is available
    if (!auth) {
      setFirebaseError(true);
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };
        dispatch(loginSuccess(userData));
      } else {
        dispatch(logout());
      }
      setLoading(false);
    }, (error) => {
      console.error('Auth state change error:', error);
      setFirebaseError(true);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (firebaseError) {
    return <FirebaseError />;
  }

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route
          path="/profile/:uid"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute>
              <Navigate to="/" />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
