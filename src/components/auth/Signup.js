import React from "react";
import './Auth.css'
import LandlordSignup from "./LandlordSignup";
import TenantSignup from "./TenantSignup";


function Signup(){
    
    return(
        <>

        <div className="login-wrap">
	        <div className="login-html">
		        <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Tenant?</label>
		        <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">LandLord</label>
		        <div className="login-form">

                    <TenantSignup/>
                    <LandlordSignup/>

		        </div>
	        </div>
        </div>
        

        </>
    )
}

export default Signup;