import React from "react";
import './Auth.css'
import LandlordSignup from "./LandlordSignup";
import TenantSignup from "./TenantSignup";


function Signup({signup}){
    
    return(
        <>

        <div className="login-wrap">
	        <div className="login-html">
                <centre>
                    <p id="register">Register as?</p>
                </centre>
		        <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Tenant</label>
		        <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">LandLord</label>
		        <div className="login-form">

                    <TenantSignup signup={signup} />
                    <LandlordSignup signup={signup} />

		        </div>
	        </div>
        </div>
        

        </>
    )
}

export default Signup;