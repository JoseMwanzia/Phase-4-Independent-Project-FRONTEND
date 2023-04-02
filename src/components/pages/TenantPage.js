import React, {useEffect, useState} from "react";
import TenantItem from "../items/TenantItem";
import { GrFormAdd } from 'react-icons/gr';
import Navbar from "../navbar/Navbar";


function TenantPage(){

    const [tenants, setTenants] = useState([])
    const [username, setUsername] = useState('');
    const [identification, setIdentification] = useState('')
    const [email, setEmail] = useState('')



    function handleSubmit(e){
		e.preventDefault();
		fetch("http://127.0.0.1:3000/tenants/register", {
			mode: 'no-cors',
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, identification,email }),
		})
        .then((r) => {
            if (r.status.created) {
              r.json().then((user) => {
                setTenants(...tenants, user)

            });
            }
          });
	}



    useEffect(()=>{
        fetch("http://127.0.0.1:3000/tenants")
        .then((r) => r.json())
        .then((c)=>{
            console.log(c)
            setTenants(c)})
    },[])




    return(
        <>

        <Navbar/>
            <div className="form">
                
                <div className="row aptForm">
                    <center><h2 style={{color:"red"}} id="reviewform">Add a Tenant </h2></center>
                
                   {/* contain a form to add a reviews */}
    
                   <form className="row gx-3 gy-2 align-items-center" id="create_form" onSubmit={handleSubmit}>
                        <div className="col-sm-3">
                    <label className="visually-hidden" for="specificSizeInputName">Name</label>
                        <input type="text" className="form-control" id="specificSizeInputName" placeholder="Full Names" Value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    </div>

                    <div className="col-sm-3">
                    <label className="visually-hidden" for="specificSizeInputGroupUsername">ID</label>
                    <div className="input-group">
                            <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="Identification" value={identification} onChange={(e)=> setIdentification(e.target.value)} />
                    </div>
                    </div>

                    <div className="col-sm-3">
                    <label className="visually-hidden" for="specificSizeInputGroupUsername">email</label>
                    <div className="input-group">
                            <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    </div>

                    <div className="col-1">
                         <button type="submit" className="btn btn-primary"><GrFormAdd/></button>
                    </div>
                </form>
                
    
    
    
    
                </div>
            </div>

    <div className="container mt-3 taskList">
            <center>
                <h4>TENANTS</h4>
            </center>
            <div  className="row">

                {
                    tenants?.map((tenant)=> <TenantItem tenant={tenant}/> )
                }


                


            </div> 
        </div>

        </>
    )
}


export default TenantPage;