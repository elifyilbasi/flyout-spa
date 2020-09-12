import app from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBjNO1No2p2yaQZZaXRRPj0ytS3mqLnh4M",
  authDomain: "flyout-spa.firebaseapp.com",
  databaseURL: "https://flyout-spa.firebaseio.com",
  projectId: "flyout-spa",
  storageBucket: "flyout-spa.appspot.com",
  messagingSenderId: "1040037663317",
  appId: "1:1040037663317:web:747c202a9dccafcdee7adc",
  measurementId: "G-1WH2857P4B",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
  }
}

export default Firebase;
