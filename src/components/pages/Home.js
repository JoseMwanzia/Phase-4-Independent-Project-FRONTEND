import React, {useEffect,useState} from "react";
import { Navigate} from "react-router-dom";
import "./Home.css"
// import TenantPage from "./TenantPage";
// import HousePage from "./HousePage";
import Navbar from "../navbar/Navbar";




function Home({user, setAnyUser, setUser}){

    // const[tenant, setTenant]= useState([])



    // console.log(user)

        // useEffect(()=>{
        //     fetch("http://127.0.0.1:3000/tenant",{
        //         mode: 'no-cors',
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //     })
        //     .then(r=>r.json())
        //     .then(data=>setTenant(data))
        // },[])

        function loggedOut(){
            fetch("http://127.0.0.1:3000/logout", { method: "DELETE" })
            setUser(null);
            setAnyUser(true)
        }



    return(
        <div>

        <Navbar/>
    

        <div className="logout">
            <button type="button" className="btn btn-outline-danger" onClick={loggedOut}>Log Out</button>
        </div>


        <div className="container">
        
            <div className="row homeContent">
                <div className="col">
                    <p className="homeContent"> <span>Welcome</span>  <br/> <span>{user.username}</span></p>
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