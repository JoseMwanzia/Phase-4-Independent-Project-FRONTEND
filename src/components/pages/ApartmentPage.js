import React, {useEffect, useState} from "react";
import {GrFormAdd} from "react-icons/gr";
import ApartmentItem from "../items/ApartmentItem";
import './Review.css'
import Navbar from "../navbar/Navbar";




function ApartmentPage(){

    const [apartments, setApartments] = useState([])
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')


    useEffect(()=>{
        fetch("http://127.0.0.1:3000/apartments")
        .then((r) => r.json())
        .then((r)=>setApartments(r))
    },[])


    // function handleSubmit(e){
	// 	e.preventDefault();
	// 	fetch("http://127.0.0.1:3000/apartments", {
	// 		mode: 'no-cors',
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({name, location, category }),
	// 	})
    //     .then((r) => {
    //         if (r.status.created) {
    //           r.json().then((apartment) => {
    //             setApartments(...apartments, apartment)

    //         });
    //         }
    //       });
	// }

          

    return(
        <>

        <Navbar/>

            <div className="form">
                
                <div className="row aptForm" >
                    <center><h2 style={{color:"red"}} id="reviewform"> add an apartment </h2></center>
                
                   
    
                   <form className="row gx-3 gy-2 align-items-center" id="create_form" >
                        <div className="col-sm-3">
                            <label className="visually-hidden" for="specificSizeInputName">name</label>
                            <input type="text" className="form-control" id="specificSizeInputName" placeholder="name" Value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="col-sm-3">
                            <label className="visually-hidden" for="specificSizeInputGroupUsername">Location</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="location" value={location} onChange={(e)=> setLocation(e.target.value)} />
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <label className="visually-hidden" for="specificSizeInputGroupUsername">Categpry</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="Category" value={category} onChange={(e)=> setCategory(e.target.value)} />
                            </div>
                        </div>

                    <div className="col-1">
                         <button type="submit" className="btn btn-primary"><GrFormAdd/></button>
                    </div>
                </form>
                
    
    
    
    
                </div>
            </div>

    <div className="container mt-5 taskList">
            <center>
                <h4>APARTMENTSS</h4>
            </center>
            <div  className="row">

                {
                    apartments?.map((apartment)=> <ApartmentItem apartment={apartment}/> )
                }


                


            </div> 
        </div>

        </>
    )
}


export default ApartmentPage;