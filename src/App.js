import './App.css';

import { useState } from "react";

import { signInWithGoogle } from './firebase';
import { db } from "./firebase";
import 'firebase/firestore';
import { doc, setDoc, collection, getDocs } from "firebase/firestore"; 


function App() {
  const submit = (e) => {
    setDoc(doc(db, "items", "blueberry"), {
      name: "blueberry",
      state: "CA",
      country: "USA"
    });
  };
  
  return (
    <div className="App">
        <button onClick={ signInWithGoogle }>Log In With Google</button>
        <h1>{localStorage.getItem('name')}</h1>

    </div>
  );
}
  
export default App;
