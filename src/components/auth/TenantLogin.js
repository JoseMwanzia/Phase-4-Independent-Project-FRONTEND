import React, {useState} from "react";
import './Auth.css'
import {Link, Navigate} from "react-router-dom"


function TenantLogin({signup}){

    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogin(e){
        e.preventDefault();
        fetch("http://127.0.0.1:3000/tenant/login",{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		})
            .then((r) =>{
                if(r.status === 200){
                    r.json().then((user)=>{
                        setIsLoggedIn(true);
                        signup(user)
                        console.log(user)
                    })
                }
            })
    }


    if (isLoggedIn) {
        return <Navigate to="/home" />;
      }




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
					<input type="submit" className="button" value="Sign In" onClick={()=>alert("unaauthoorized")}/>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
                    <br/>
                    <Link to="/signup">Sign up</Link>
				</div>
			</form>

        </>
  


    
    )
}

export default TenantLogin;