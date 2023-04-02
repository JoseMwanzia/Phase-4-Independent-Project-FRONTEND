import React, {useState} from "react";
import { Navigate} from "react-router-dom";
import "./Auth.css"



function ResetPassword(){

    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")


    function passCheck(){
        if(password1 === password2){
            setPassword(password1)
        }else{
            console.log("Password don't match")
        }
    }

 

    function handleReset(e){
        e.preventDefault();
        fetch("http://127.0.0.1:3000/password/reset",{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({email, password }),
		})
            .then((r) =>{
                if(r.status === 201){
                    r.json().then((p)=>{

                        <Navigate to="/login"/>
                      
                        console.log(p)
                    })
                }
            })

    }

    return(
        <>




<div className="login-wrap">
	        <div className="login-html">
                <centre>
                    <p id="register">Reset Password</p>
                </centre>
		        <div className="login-form">




<form onSubmit={handleReset}>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=> setEmail(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={password1}  onChange={(e)=> setPassword1(e.target.value)} />
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={password2} onChange={(e)=> setPassword2(e.target.value)} />
  </div>

  <button type="submit" class="btn btn-primary" onClick={passCheck}>Submit</button>
</form>






		        </div>
	        </div>
        </div>





            

        </>
    )
}

export default ResetPassword;