import React from "react";
import { Link } from "react-router-dom";


function ApartmentItem({apartment}){

    return(
        <>
        <div className="col-3 p-1">
            <div className="card" >
                <img src="https://images.ctfassets.net/pg6xj64qk0kh/mwsUhyGswLjXMSLoDfpqH/529760a3f4cd85c5c3eb8f7b6c13a67d/camden-tempe-apartments-tempe-az-west-pool-and-loungers.jpg?w=1098" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{apartment.name}</h5>
                    <p className="card-text">{apartment.location}</p>
                    <Link  to="/houses" className="btn btn-primary">Houses</Link>
                </div>
            </div>
        </div>      

        </>
    )
}

export default ApartmentItem;