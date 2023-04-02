import React from "react";
import './Auth.css'
import TenantLogin from "./TenantLogin";
import LandlordLogin from "./LandlordLogin";


function Login({signup}){

    return(
        <>

        <div className="login-wrap">
	        <div className="login-html">
                <centre>
                    <p id="register">Login as?</p>
                </centre>
		        <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Tenant</label>
		        <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">LandLord</label>
		        <div className="login-form">


                    <TenantLogin signup={signup}/>
                    <LandlordLogin signup={signup}/>

		        </div>
	        </div>
        </div>

        </>
    )
}

export default Login;