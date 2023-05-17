// import { initializeApp, getApp } from "firebase/app";
// import {
//   GoogleAuthProvider,
//   getAuth,
//   signInWithPopup,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   sendPasswordResetEmail,
//   confirmPasswordReset,
//   signOut,
// } from "firebase/auth";
// import {
//   getFirestore,
//   query,
//   getDocs,
//   collection,
//   where,
//   addDoc,
// } from "firebase/firestore";
// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

// const GetFireBaseAdmin = () => {
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);
//   const db = getFirestore(app);
//   return { app, auth, db };
// };

// const signInWithGoogle = async (auth, db) => {
//   try {
//     const googleProvider = new GoogleAuthProvider();
//     const res = await signInWithPopup(auth, googleProvider);
//     const user = res.user;
//     const q = query(collection(db, "users"), where("uid", "==", user?.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, "users"), {
//         uid: user?.uid,
//         name: user?.displayName,
//         authProvider: "google",
//         email: user?.email,
//         photoURL: user?.photoURL || "",
//       });
//     }
//     return { status: true };
//   } catch (err) {
//     return { status: false, err: err };
//   }
// };

// const registerWithEmailAndPassword = async (
//   auth,
//   db,
//   name,
//   email,
//   password
// ) => {
//   try {
//     await createUserWithEmailAndPassword(auth, email, password)
//       .then(async function (result) {
//         const user = result.user;
//         await addDoc(collection(db, "users"), {
//           uid: user?.uid,
//           name,
//           authProvider: "local",
//           email,
//           photoURL: user?.photoURL || "",
//         });
//         return { status: true };
//       })
//       .catch(function (error) {
//         return { status: false, err: err };
//       });
//   } catch (err) {
//     return { status: false, err: err };
//   }
// };

// const logInWithEmailAndPassword = async (auth, email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//     return { status: true, message: "Success" };
//   } catch (err) {
//     return { status: false, err: err };
//   }
// };

// const sendPasswordReset = async (auth, email) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//     return { status: true };
//   } catch (err) {
//     return { status: false, err: err };
//   }
// };

// const ResetPasswordByLink = async (auth, code, newPassword) => {
//   try {
//     await confirmPasswordReset(auth, code, newPassword);
//     return { status: true };
//   } catch (err) {
//     return { status: false, err: err };
//   }
// };

// const logout = (auth) => {
//   signOut(auth);
//   return { status: true };
// };

// export {
//   signInWithGoogle,
//   logInWithEmailAndPassword,
//   logout,
//   registerWithEmailAndPassword,
//   sendPasswordReset,
//   ResetPasswordByLink,
// };
// export default GetFireBaseAdmin;