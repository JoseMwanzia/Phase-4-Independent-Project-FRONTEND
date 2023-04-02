import React, {useState} from "react";
import './Auth.css'
import { Navigate, Link } from "react-router-dom";


function TenantSignup({signup}){


    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false)


    function handleSubmit(e){
		e.preventDefault();
		fetch("http://127.0.0.1:3000/tenant/signup", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, username, password }),
		})
        .then((r) => {
            if (r.status.created) {
              r.json().then((user) =>{
                console.log(user)
                setIsRegistered(true);               signup(user)
              });
            }
           
          });
	}


    if (isRegistered) {
        return <Navigate to="/tenant/home" />;
      }





    return(
        <>

            <form className="sign-in-htm" onSubmit={handleSubmit} >
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" type="text" className="input" value={username} onChange={(e)=> setUsername(e.target.value)} />
				</div>
				<div className="group">
					<label for="pass" className="label">email address</label>
					<input id="pass" type="text" className="input"  value={email} onChange={(e)=> setEmail(e.target.value)} />
				</div>

                <div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
				</div>
			
				<div className="group">
					<input type="submit" className="button" value="Sign Up"/>
				</div>

                <div className="hr"></div>

                <div className="foot-lnk">
                    <label for="tab-1"><Link to="/login">Already Member?</Link></label>
                </div>
				{/* <div className="hr"></div>
				<div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div> */}
			</form>


        </>
    )
}

export default TenantSignup;