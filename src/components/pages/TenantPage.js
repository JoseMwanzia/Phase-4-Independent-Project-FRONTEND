import React, {useEffect, useState} from "react";
import TenantItem from "../items/TenantItem";
import { GrFormAdd } from 'react-icons/gr';


function TenantPage(){

    const [tenants, setTenants] = useState([])
    const [username, setUsername] = useState('');
    const [identification, setIdentification] = useState('')



    function handleSubmit(e){
		e.preventDefault();
		fetch("http://127.0.0.1:3000/tenants/register", {
			mode: 'no-cors',
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, identification }),
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
        .then((r)=>setTenants(r.data))
    },[])




    return(
        <>
            <div className="container  mt-4" id="selection">
                
                <div className="row">
                    <center><h2 style={{color:"red"}} id="reviewform">Leave a review </h2></center>
                
                   {/* contain a form to add a reviews */}
    
                   <form className="row gx-3 gy-2 align-items-center" id="create_form" onSubmit={handleSubmit}>
                        <div className="col-sm-3">
                    <label className="visually-hidden" for="specificSizeInputName">Title</label>
                        <input type="text" className="form-control" id="specificSizeInputName" placeholder="Title" Value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                <div className="col-sm-6">
                    <label className="visually-hidden" for="specificSizeInputGroupUsername">Description</label>
                    <div className="input-group">
                            <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="Description" value={identification} onChange={(e)=> setIdentification(e.target.value)} />
                    </div>
                    </div>
                    <div className="col-1">
                         <button type="submit" className="btn btn-primary"><GrFormAdd/></button>
                    </div>
                </form>
                
    
    
    
    
                </div>
            </div>

    <div className="container mt-3" id="taskList">
            <center>
                <h4>TENANTS</h4>
            </center>
            <div  className="row">

                {
                    tenants.map((tenant)=> <TenantItem tenant={tenant}/> )
                }


                


            </div> 
        </div>

        </>
    )
}


export default TenantPage;