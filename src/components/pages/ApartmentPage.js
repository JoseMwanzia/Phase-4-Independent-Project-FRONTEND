import React, {useEffect, useState} from "react";
import {GrFormAdd} from "react-icons/gr";
import ApartmentItem from "../items/ApartmentItem";



function ApartmentPage(){

    const [apartments, setApartments] = useState([])
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')


    useEffect(()=>{
        fetch("http://127.0.0.1:3000/apartments")
        .then((r) => r.json())
        .then((r)=>setApartments(r.data))
    },[])


    function handleSubmit(e){
		e.preventDefault();
		fetch("http://127.0.0.1:3000/apartments", {
			mode: 'no-cors',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({name, location, category }),
		})
        .then((r) => {
            if (r.status.created) {
              r.json().then((apartment) => {
                setApartments(...apartments, apartment)

            });
            }
          });
	}

          

    return(
        <>
            <div className="container  mt-4" id="selection">
                
                <div className="row">
                    <center><h2 style={{color:"red"}} id="reviewform"> add an apartment </h2></center>
                
                   
    
                   <form className="row gx-3 gy-2 align-items-center" id="create_form" onSubmit={handleSubmit}>
                        <div className="col-sm-3">
                            <label className="visually-hidden" for="specificSizeInputName">name</label>
                            <input type="text" className="form-control" id="specificSizeInputName" placeholder="Title" Value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="col-sm-6">
                            <label className="visually-hidden" for="specificSizeInputGroupUsername">Location</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="Description" value={location} onChange={(e)=> setLocation(e.target.value)} />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label className="visually-hidden" for="specificSizeInputGroupUsername">Categpry</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="Description" value={category} onChange={(e)=> setCategory(e.target.value)} />
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
                <h4>APARTMENTSS</h4>
            </center>
            <div  className="row">

                {
                    apartments.map((apartment)=> <ApartmentItem apartment={apartment}/> )
                }


                


            </div> 
        </div>

        </>
    )
}


export default ApartmentPage;