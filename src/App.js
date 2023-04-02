import React, {useState} from 'react';
import './App.css';
import {Route, Routes, Link, Navigate} from "react-router-dom"
import Home from "./components/pages/Home";
import Landingpage from './components/pages/Landingpage';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ApartmentPage from './components/pages/ApartmentPage';
import Review from './components/pages/Review';
import TenantPage from './components/pages/TenantPage';
import HousePage from './components/pages/HousePage';

function App() {


  const [user, setUser] = useState(null);
  const [anyUser, setAnyUser] = useState(false)

  function signup(user) {
		setUser(user);
	}

  function handleLogout() {
    fetch("http://127.0.0.1:3000/logout", { method: "DELETE" })
    .then(d => d.json())
    .then((r) => {
      if (r.message === "success") {
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

        <Route path="/home" element={<Home handleLogout={handleLogout} user={user} setUser={setUser}/>}/>


        <Route path="/login" element={<Login signup={signup}/>} />

        <Route path="/signup" element={<Signup signup={signup}/>} />

        <Route path="/apartments" element={<ApartmentPage />}/>

        <Route path="/houses" element={<HousePage />}/>

        <Route path="/tenants" element={<TenantPage />}/>
        

        <Route path="/Reviews" element={<Review/>}/>

      </Routes>





   
    </div>
  );
}

export default App;
