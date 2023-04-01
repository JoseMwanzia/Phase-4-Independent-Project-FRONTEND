import React, {useEffect,useState} from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import "./Home.css"



function Home({user}){

    const[tenant, setTenant]= useState([])



    console.log(user)

        useEffect(()=>{
            fetch("http://127.0.0.1:3000/tenant")
            .then(r=>r.json())
            .then(data=>setTenant(data))
        },[])

        function loggedOut(){
            return <Navigate to="/"/>
        }



    return(
        <div>
    

        <div>
            <button type="button" className="btn btn-outline-danger" onclick={loggedOut}>Log Out</button>
        </div>


        <div className="container">
        
            <div className="row homeContent">
                <div className="col">
                    <p className="homeContent"><span>{tenant.username}</span> <br/> <span>Welcome to RealState</span></p>
                </div>
                <div className="col">
                     <p> View appartments and their reviews before making your next lease</p>
                </div>
                <div className="col ">
                    <p>Manage your house as a tenant and your apartment as a landlord</p>
                </div>
            </div>
        </div>

        </div>
    )

}

export default Home;