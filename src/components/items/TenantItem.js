import React from "react";
import {AiOutlineEdit, AiOutlineDelete} from "react-icons/ai"


function TenantItem({tenant}){
    return(
        <>

        <div className="col-3 p-1">
            <div className="card" >
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Tenant Name</h5>
                    <p className="card-text"></p>
                    <a target={'_blank'} href="#" className="btn btn-primary">{}</a>
                </div>

                <div id="item_footer">
                        <h6><span>Apartment</span> <span>house</span>  </h6>
                        <h6 id="del_edit"><span><AiOutlineEdit/></span>  <span><AiOutlineDelete/></span></h6>
                    </div>

            </div>
        </div> 
              
        </>
    )
}

export default TenantItem;