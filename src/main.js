import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";

// Your web app's Firebase configuration
const  firebaseConfig = {
    apiKey: "AIzaSyDgjuifIx25Z-rqwp5L4C8u9DBfyt_wZyM",
    authDomain: "vue-projects-jehd.firebaseapp.com",
    projectId: "vue-projects-jehd",
    storageBucket: "vue-projects-jehd.appspot.com",
    messagingSenderId: "902812106392",
    appId: "1:902812106392:web:7e3f778eb36c1a16cedaed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


createApp(App)
.use(store)
.use(router)
.mount("#app");
