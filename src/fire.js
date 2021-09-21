import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDsxmUBpo4n8SUJImIU0SUnzYkD5CsunVA",
    authDomain: "authentication-24180.firebaseapp.com",
    projectId: "authentication-24180",
    storageBucket: "authentication-24180.appspot.com",
    messagingSenderId: "256545170415",
    appId: "1:256545170415:web:529cd914eddda04a218c1a"
};


const fire = firebase.initializeApp(firebaseConfig);

export default fire;