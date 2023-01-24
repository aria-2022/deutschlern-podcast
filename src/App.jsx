import "./App.css";
import json from "./data.json";
import Home from "./components/Home";
import Podcast from "./components/Podcast";
import Aboutus from "./components/Aboutus";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Audio from "./components/Audio";
import Contactus from "./components/Contactus";
import ViewMessages from "./components/ViewMessages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import a1 from "./assets/a1.mp3";
import axios from "axios";

export const AppContext = createContext();

function App() {
  const [users, setUsers] = useState();
  const [podcasts, setPodcasts] = useState();
  const [contacts, setContacts] = useState();

  const [data, setData] = useState(json);
  const [user, setUser] = useState();

  const [inputName, setInputName] = useState("");

  useEffect(() => {
    axios("http://localhost:3000/user").then((i) => setUsers(i.data));
    axios("http://localhost:3000/podcast").then((i) => setPodcasts(i.data));
    axios("http://localhost:3000/podcast").then((i) => setContacts(i.data));
  }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ data, user, setUser, users, setUsers, podcasts, setPodcasts, contacts, setContacts }}
      >
        <Navbar />
        <Audio media={a1} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
