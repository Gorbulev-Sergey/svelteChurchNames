import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBnfXk0ByAt1xYbhy3c7JzkgdDrwf_uifI',
	authDomain: 'sveltechurchnames.firebaseapp.com',
	databaseURL: 'https://sveltechurchnames-default-rtdb.firebaseio.com',
	projectId: 'sveltechurchnames',
	storageBucket: 'sveltechurchnames.appspot.com',
	messagingSenderId: '453402358068',
	appId: '1:453402358068:web:806aa3b0dc4642bf1bb561'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
