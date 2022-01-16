// import { getAuth, createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword } from "firebase/auth";

export const UserLogin=(auth,Email,Password)=>{
//     signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
    return{
        type:'USER_LOGIN',
        payload:''
    }
}
export const UserSignup=(auth,Email,Password)=>{
    // createUserWithEmailAndPassword(auth, Email, Password)
    // .then((userCredential) => {
    // console.log(auth);
    // Signed in 
    // setUser(auth.currentUser);
    // console.log(userCredential)
    // console.log(userCredential.user)

    // ...
//   })
//   .catch((error) => {
    // console.log(error.message);
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // ..
//   });
    return{
        type:'USER_SIGNUP',
        payload:''
    }
}
export const USERLOGOUT=(auth)=>{
    // signOut(auth).then(() => {
    //     // Sign-out successful.
    //   }).catch((error) => {
    //     // An error happened.
    //   });
    return{
        type:'USER_LOGOUT',
        payload:''
    }
}