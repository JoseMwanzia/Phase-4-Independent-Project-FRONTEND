import React from "react";
import './Auth.css'


function LandlordLogin(){

    return(
        <>

        <form className="sign-up-htm" onSubmit={handleSubmit}>
            <div className="group">
                <label for="user" className="label">Username</label>
                <input id="user" type="text" className="input" value={username} onChange={(e)=>{
                    e.preventDefault()
                setUsername(e.target.value)}} />
            </div>


            <div className="group">
                <label for="pass" className="label">Email Address</label>
                <input id="pass" type="text" className="input" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>


            <div className="group">
                <label for="pass" className="label">Password</>
                <input id="pass" type="password" className="input" data-type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            </div>


            <div className="group">
                <input type="submit" className="button" value="Sign Up"/>
            </div>

            <div className="hr"></div>
            <div className="foot-lnk">
                    <label for="tab-1">Already Member?</label>
            </div>
        </form>
			

			





        </>
    )
}

export default LandlordLogin;