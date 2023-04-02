import React from "react";
import {AiOutlineEdit, AiOutlineDelete} from "react-icons/ai"
import "./ReviewItem.css"


function TenantItem({tenant}){
    return(
        <>

        <div className="col-3 p-1">
            <div className="card" >
                <img src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{tenant.username}</h5>
                    <p className="card-text">{tenant.email} </p>
                </div>

                <div className="tenant_footer">
                        <h6><span>House:</span> <span>{tenant.houses[0] ? tenant.houses[0].house_number: "No House" }</span></h6>
                        
                </div>
                <div className="tenant_footer">
                    <h6 id="del_edit"><span><AiOutlineEdit/></span>  <span><AiOutlineDelete/></span></h6>
                </div>

            </div>
        </div> 
              
        </>
    )
}

export default TenantItem;