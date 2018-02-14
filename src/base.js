import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: "AIzaSyABbnvZfB4QrVWf-HgkUzrZtBPtrx9hM8M",
  authDomain: "catchoftheday-a6d51.firebaseapp.com",
  databaseURL: "https://catchoftheday-a6d51.firebaseio.com"
});

const base = Rebase.createClass(app.database());

export default base;