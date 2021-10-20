import firebaseConfig from "./firebase.config";
import firebase from "firebase/app";
import "firebase/auth";

export const initializeLoginFramework = () => {
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
};

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      const { displayName, email } = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email,
        success: true,
        error: "",
      };
      return signedInUser;
    })
    .catch((err) => {
      const signedInUser = {};
      signedInUser.isSignedIn = false;
      signedInUser.success = false;
      signedInUser.error = err.message;
      return signedInUser;
    });
};

export const signInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      const { displayName, email } = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email,
        success: true,
        error: "",
      };
      return signedInUser;
    })
    .catch((err) => {
      const signedInUser = {};
      signedInUser.isSignedIn = false;
      signedInUser.success = false;
      signedInUser.error = err.message;
      return signedInUser;
    });
};

export const createUserWithCredentials = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.success = true;
      newUserInfo.error = "";
      return newUserInfo;
    })
    .catch((err) => {
      const newUserInfo = {};
      newUserInfo.success = false;
      newUserInfo.error = err.message;
      return newUserInfo;
    });
};

export const signInUserWithCredentials = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const newUserInfo = res.user;
      newUserInfo.success = true;
      newUserInfo.error = "";
      return newUserInfo;
    })
    .catch((err) => {
      const newUserInfo = {};
      newUserInfo.success = false;
      newUserInfo.error = err.message;
      return newUserInfo;
    });
};

export const getUserToken = () => {
  return firebase
    .auth()
    .currentUser.getIdToken(true)
    .then((idToken) => {
      return idToken;
    })
    .catch((err) => {
      return firebase.auth().currentUser.getIdToken(false);
    });
};
