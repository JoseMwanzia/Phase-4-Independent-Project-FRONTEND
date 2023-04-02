import React from "react"; 
import { Link } from "react-router-dom"; 



function TenantNavbar(){

    return(
        <>

    <nav className="nav">

        <Link className="nav-link"  to="/tenant/home">Home</Link>
        <Link className="nav-link" to="/apartments">Apartment</Link>
        <Link className="nav-link" to="/reviews">Reviews</Link>

    </nav>

        </>
    )
}
export default TenantNavbar;