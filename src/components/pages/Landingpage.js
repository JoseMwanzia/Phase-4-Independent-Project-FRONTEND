import React from "react";
import './Landingpage.css'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-router-dom";


function Landingpage(){
    return(
        <>

        <div class="d-grid gap-2 d-md-block me-9" >
            <button type="button" class="btn btn-outline-success"><Link to="/login">Login</Link></button>
            <button type="button" class="btn btn-outline-success"><Link to="/Signup">Signup</Link></button>
        </div>


        <div className="container">
            <h1 contenteditable id="hone">RealState</h1>
            <p id="para">Easy And Effective Way to View, Review and Manage Houses and Apartments</p>
            <p id="para">Login or Sign Up and get started <Link to="/login" id="login_arrow"><HiOutlineArrowNarrowRight/></Link></p>
        </div>

        
        </>
    )
}

export default Landingpage;