import React, { useState } from 'react';
import * as Font from 'expo-font';
import  AppLoading  from 'expo-app-loading';
import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

import * as firebase from 'firebase';

//Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBZORO6otmEokkXwAGIBNmLVIiQfP29iow",
  authDomain: "chariot-app-11195.firebaseapp.com",
  projectId: "chariot-app-11195",
  storageBucket: "chariot-app-11195.appspot.com",
  messagingSenderId: "571417045319",
  appId: "1:571417045319:web:96127a3e983063270d0462",
  measurementId: "G-LSDD5FTP52"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });
}

// Tracking of auth status changes
/*firebase.auth().onAuthStateChanged(user => {
  if(user){
    console.log(user.provideData)
  } else {
    console.log('user logged out')
  }
})*/

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
        onError={console.warn}    
      />
    )
  }

}