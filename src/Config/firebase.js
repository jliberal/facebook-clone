import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAJpyJqUQJ2xbzlvyp6BhTibGkHI1o5mkk',
	authDomain: 'facebook-clone-b32d4.firebaseapp.com',
	databaseURL: 'https://facebook-clone-b32d4.firebaseio.com',
	projectId: 'facebook-clone-b32d4',
	storageBucket: 'facebook-clone-b32d4.appspot.com',
	messagingSenderId: '809049683723',
	appId: '1:809049683723:web:8b601cbaeaa2bd2a76140e',
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
