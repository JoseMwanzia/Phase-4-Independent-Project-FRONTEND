import React, {useState} from "react";
import { Navigate } from 'react-router-dom';
import './Auth.css'


function LandlordLogin({signup}){

    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogin(e){
        e.preventDefault();
        fetch("http://127.0.0.1:3000/landlord/login",{
			mode: 'no-cors',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		})
            .then((r) =>{
				// setIsLoading(false);
                if(r.status.ok){
                    r.json().then((user)=>{
                        setIsLoggedIn(true);
                        signup(user)
                    })
                }
            })
    }


    if (isLoggedIn) {
        return <Navigate to="/home" />;
      }


    return(
        <>

        <form className="sign-up-htm" onSubmit={handleLogin}>
            <div className="group">
                <label for="user" className="label">Username</label>
                <input id="user" type="text" className="input" value={username} onChange={(e)=>{
                    e.preventDefault()
                setUsername(e.target.value)}} />
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
                    <label for="tab-1">Already Member?</label>
            </div>
        </form>
			

			





        </>
    )
}

export default LandlordLogin;