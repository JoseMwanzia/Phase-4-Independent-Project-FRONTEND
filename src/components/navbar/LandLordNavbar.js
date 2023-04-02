import React from "react";
import { Link } from "react-router-dom";



function LandlordNavbar(){

    return(
        <>

    <nav className="nav">
        <Link className="nav-link"  to="/landlord/home">Home</Link>
        <Link className="nav-link" to="/apartments">Apartments</Link>
        <Link className="nav-link" to="/reviews">Reviews</Link>
        <Link className="nav-link" to="/tenants" >Tenants</Link>
        {/* <Link className="nav-link">Link</Link>    */}
    </nav>

        </>
    )
}

export default LandlordNavbar;