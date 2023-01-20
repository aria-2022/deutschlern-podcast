import './App.css';
import json from "./data.json";
import Home from "./components/Home";
import Podcast from "./components/Podcast";
import Aboutus from "./components/Aboutus";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Audio from './components/Audio';
import eLanguage from "./language/english.json";
import dLanguage from "./language/deutsch.json";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, createContext, useEffect } from 'react';

export const AppContext = createContext();

  function App() {

    const [deutsch, setDeutsch] = useState(false);
    const [data, setData] = useState(json)
    const [user, setUser] = useState()

    
    const [inputName, setInputName] = useState("");


    function languageHandler() {
      setDeutsch(!deutsch);
    }
    return (
      <div className="App">




       <AppContext.Provider 
       value={{data, user, setUser}}>

        
        
        <Navbar />
        <Audio />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/podcast' element={<Podcast/>} />
          <Route path='/aboutus' element={<Aboutus/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
        <Footer />
        </AppContext.Provider>
      </div>
    );
  }

export default App;

