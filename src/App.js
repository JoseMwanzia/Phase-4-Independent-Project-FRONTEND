import React, {useState} from 'react';
import './App.css';
import {Route, Routes, Link, Navigate} from "react-router-dom"
import Home from "./components/pages/Home";
import Landingpage from './components/pages/Landingpage';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

function App() {


  const [user, setUser] = useState(null);
  const [anyUser, setAnyUser] = useState(false)

  function signup(user) {
		setUser(user);
	}

  function handleLogout() {
    fetch("http://127.0.0.1:3000/logout", { method: "DELETE" }).then((r) => {
      if (r.status.no_content) {
        setUser(null);
        setAnyUser(true)
      }
    });
  }

if(anyUser){
  return <Navigate to="/"/>
}
  





  return (
    <div>
      <h3 >
        <Link to="/" id="logo_title">RealState</Link>  
      </h3>




      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/home" element={<Home handleLogout={handleLogout} user={user}/>}/>

        <Route path="/login" element={<Login signup={signup}/>} />

        <Route path="/signup" element={<Signup signup={signup}/>} />




        {/* <Route path="/login" element={
       
        !user ? <Login signup={signup} /> : <Navigate to="/home"></Navigate>
       }/>

      <Route path="/signup" element={
       
       !user ? <Signup signup={signup} /> : <Navigate to="/home"></Navigate>
      }/> */}

      </Routes>





   
    </div>
  );
}

export default App;
