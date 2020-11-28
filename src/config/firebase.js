import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCkI8TmnJnG_2YUlEKtnkwfFC8ReGAd1Q4",
  authDomain: "dscviit2020.firebaseapp.com",
  databaseURL: "https://dscviit2020.firebaseio.com",
  projectId: "dscviit2020",
  storageBucket: "dscviit2020.appspot.com",
  messagingSenderId: "409679388322",
  appId: "1:409679388322:web:4e450032c7d189e88a01fb",
  measurementId: "G-FLD2DGWQX8"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({
  synchronizeTabs: !0
}).catch(() => {
  console.warn("DB offline support not available")
})
export default {
  notificationSupported: firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported()) ? firebase.messaging() : null,
  firestore: firebase.firestore(),
  auth: firebase.auth(),
  storage: firebase.storage(),
};