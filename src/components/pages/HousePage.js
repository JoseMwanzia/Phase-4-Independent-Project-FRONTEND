import React, {useEffect, useState} from "react";
import HouseItem from "../items/HouseItem";
import { GrFormAdd } from 'react-icons/gr';
import Navbar from "../navbar/Navbar";
import './Review.css'


function HousePage({id}){

    const [houses, setHouses] = useState([])
    const [image_url, setImage_url] = useState('')
    const [house_number, setHouse_number] = useState('')
    const [description, setDescription] = useState('')
    const [rent, setRent] = useState(0.00)

    

    useEffect(()=>{
        fetch("http://127.0.0.1:3000/houses")
        .then((r) => r.json())
        .then((d)=>setHouses(d))
    },[])


    // /apartment/house/add/:id


    function handleSubmit(e){
		e.preventDefault();
		fetch("http://127.0.0.1:3000/tenants/register", {
			mode: 'no-cors',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({rent, description, house_number, image_url}),
		})
        .then((r) => {
            if (r.status.created) {
              r.json().then((house) => {
                setHouses(...houses, house)

            });
            }
          });
	}




    return(
        <>

        <Navbar/>

            <div className="form" >
                
                <div className="row aptForm" >
                    <center><h2 style={{color:"red"}} id="reviewform">Add a house </h2></center>
                
    
                   <form className="row gx-3 gy-2 align-items-center" id="create_form" onSubmit={handleSubmit}>
                        <div className="col-sm-3">
                            <label className="visually-hidden" for="specificSizeInputName">house number</label>
                            <input type="text" className="form-control" id="specificSizeInputName" placeholder="Title" Value={house_number} onChange={(e)=>setHouse_number(e.target.value)}/>
                        </div>
                        <div className="col-sm-3">
                            <label className="visually-hidden" for="specificSizeInputGroupUsername">Description</label>
                            <div className="input-group">
                            <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="Description" value={description} onChange={(e)=> setDescription(e.target.value)} />
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <label className="visually-hidden" for="specificSizeInputGroupUsername">rent</label>
                            <div className="input-group">
                            <input type="number" className="form-control" id="specificSizeInputGroupUsername" placeholder="Description" value={rent} onChange={(e)=> setRent(e.target.value)} />
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <label className="visually-hidden" for="specificSizeInputGroupUsername">image url</label>
                            <div className="input-group">
                            <input type="number" className="form-control" id="specificSizeInputGroupUsername" placeholder="Description" value={image_url} onChange={(e)=> setImage_url(e.target.value)} />
                            </div>
                        </div>

                    <div className="col-1">
                         <button type="submit" className="btn btn-primary"><GrFormAdd/></button>
                    </div>
                </form>
                
    
    
    
    
                </div>
            </div>

    <div className="container mt-5" id="taskList">
            <center>
                <h4>REVIEWS</h4>
            </center>
            <div  className="row">

                {
                    houses?.map((house)=> <HouseItem house={house}/> )
                }


                


            </div> 
        </div>

        </>
    )
}


export default HousePage;