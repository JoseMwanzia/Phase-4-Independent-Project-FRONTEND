import React, {useEffect,useState} from "react";
import {Route, Routes} from "react-router-dom";
import "./Home.css"
import LandlordNavbar from "../navbar/LandLordNavbar";
import TenantPage from "./TenantPage";
import ApartmentPage from "./ApartmentPage";
import Review from "./Review";
import HousePage from "./HousePage";



function LandlordHome({handleLogout}){

    const[landlord, setLandlord]= useState([])



   

        useEffect(()=>{
            fetch("http://127.0.0.1:3000/landlord")
            .then(r=>r.json())
            .then(data=>setLandlord(data))
        },[])

        // function loggedOut(){
        //     return <Navigate to="/"/>
        // }



    return(
        <div>
    
        <LandlordNavbar/>

        <div className="logout">
            <button type="button" className="btn btn-outline-danger" onclick={handleLogout()}>Log Out</button>
        </div>


        <div className="container">
        
            <div className="row homeContent">
                <div className="col">
                    <p className="homeContent"><span>{landlord.username}</span> <br/> <span>Welcome to RealState</span></p>
                </div>
                <div className="col">
                     <p> View appartments, houses, tenants and their reviews</p>
                </div>
                <div className="col ">
                    <p>Manage your apartments by click of a button</p>
                </div>
            </div>
        </div>



        <Routes>

            <Route path="/landlord/home" element={<LandlordHome/>}/>

            <Route path="/apartments" element={<ApartmentPage/>}/>

            <Route path="/Reviews" element={<Review/>}/>

            <Route path="/tenants" element={<TenantPage/>}/>

            <Route path="/houses" element={<HousePage/>}/>

        </Routes>


        </div>
    )

}

export default LandlordHome;