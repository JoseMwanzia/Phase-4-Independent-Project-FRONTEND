import React from "react";


function HouseItem({house}){

    return(
        <>
        <div className="col-3 p-1">
            <div className="card" >
                <img src="https://exej2saedb8.exactdn.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-04-at-2.28.40-PM.png?strip=all&lossy=1&ssl=1" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{house.house_number}</h5>
                    <p className="card-text">{house.tenant.username}</p>
                    <p className="card-text">{house.apartment.name}</p>
                    <a target={'_blank'} href="#" className="btn btn-primary"></a>
                </div>
            </div>
        </div>      

        </>
    )
}

export default HouseItem;