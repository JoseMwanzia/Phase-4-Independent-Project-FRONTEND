import React from "react";
import {Link} from "react-router-dom";




function Navbar(){

    return(
        <div>  
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">

        <Link className="nav-link"  to="/home">Home</Link>
        <Link className="nav-link" to="/apartments">Apartments</Link>
        <Link className="nav-link" to="/reviews">Reviews</Link>
        <Link className="nav-link" to="/tenants" >Tenants</Link>
        <Link className="nav-link" to="/houses">Houses</Link>   

      </div>
    </div>
  </div>
            </nav>

        </div>
    )
}

export default Navbar;