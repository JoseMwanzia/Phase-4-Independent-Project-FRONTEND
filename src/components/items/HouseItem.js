import React from "react";


function HouseItem({house}){

    return(
        <>
        <div className="col-3 p-1">
            <div className="card" >
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">House number</h5>
                    <p className="card-text">Ocuupying Tenant</p>
                    <a target={'_blank'} href="#" className="btn btn-primary">{Houses}</a>
                </div>
            </div>
        </div>      

        </>
    )
}

export default HouseItem;