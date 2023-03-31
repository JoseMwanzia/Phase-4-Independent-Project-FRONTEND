import React from "react";
import './Auth.css'


function TenantSignup(){

    return(
        <>

            <form className="sign-in-htm" onSubmit={handleLogin} >
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" type="text" className="input" value={username} onChange={(e)=> setUsername(e.target.value)} />
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password" onChange={(e)=> setPassword(e.target.value)} />
				</div>
			
				<div className="group">
					<input type="submit" className="button" value="Sign In"/>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</form>


        </>
    )
}

export default TenantSignup;