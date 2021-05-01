import * as firebase from 'firebase'
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCdt4i0xb6hIq91BBF6lPMJwuixWjIbLoE",
  authDomain: "story-hub-698a0.firebaseapp.com",
  projectId: "story-hub-698a0",
  storageBucket: "story-hub-698a0.appspot.com",
  messagingSenderId: "1536073721",
  appId: "1:1536073721:web:88b8b88745ed416a05a728"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();