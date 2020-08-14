/* FIREBASE SERVICE REFERENCES */
const authRef = firebase.auth();
const functionRef = firebase.functions();
const firestoreRef = firebase.firestore();
const databaseRef = firebase.database();
const storageRef = firebase.storage();

/* ELEMENT REFERENCES */
const signUpFormRef= document.querySelector('#signUpForm');
const signInFormRef= document.querySelector('#signInForm');
const signOutButton = document.querySelector('#signOutButton');
const signInProviderButtons = document.querySelectorAll('.signInProviderButton');

/* CONFIGURATIONS */
// To apply the default browser preference instead of explicitly setting it.
authRef.useDeviceLanguage();







