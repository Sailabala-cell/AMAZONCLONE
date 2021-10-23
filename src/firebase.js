import firebase from "firebase";
const firebaseApp=firebase.initializeApp(
    {
        apiKey: "AIzaSyDcpw7hVkM49-RG9fvThx3g6_ndnE5GvHk",
        authDomain: "amzn-b9a4c.firebaseapp.com",
        projectId: "amzn-b9a4c",
        storageBucket: "amzn-b9a4c.appspot.com",
        messagingSenderId: "104113580962",
        appId: "1:104113580962:web:74e448cf7c88376c73a0fb",
        measurementId: "G-7H9RS6EECS"
        
    }
)

const auth=firebase.auth();

export {auth};