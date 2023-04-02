import React, {useEffect, useState} from "react";
import './Review.css'
import ReviewItem from "../items/ReviewItem";
import { GrFormAdd} from "react-icons/gr";
import Navbar from "../navbar/Navbar";

function Review(){

    const [reviews, setReviews] = useState([])
    const [rating, setRating] =useState()
    const [description, setDescription] =useState("")
    // const [houseNumber, setHouseNumber] = useState("")
    const [house_id, setHouse_id] = useState()

    let ratings = parseInt(rating)
    let house_ids = parseInt(house_id)



    useEffect(()=>{
        fetch("http://127.0.0.1:3000/reviews")
        .then((r) => r.json())
        .then((b)=>{
            console.log(b)
            setReviews(b)})
    },[])


    function handleSubmit(e){
		e.preventDefault();
		fetch("http://127.0.0.1:3000/tenants/review/add", {
			mode: 'no-cors',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
                rating : ratings,
                 description,
                 house_id: house_ids
                }),
		})
        .then((r)=>r.json())
        .then((review)=>{
            setReviews(...reviews, review)
        })
	}


    // function houseId(house_number){
    //     fetch(`http://127.0.0.1:3000//apartments/house/${house_number}`)
    //     .then((r) => r.json())
    //     .then((d)=>setHouse_id(d.id))
    // }




    return(
        <>
        <Navbar/>
            <div className="form" >
                
                <div className="row aptForm" >
                    <center><h2 style={{color:"red"}} id="reviewform">Leave a review </h2></center>
                
                   {/* contain a form to add a reviews */}
    
                   <form className="row gx-3 gy-2 align-items-center" id="create_form" onSubmit={handleSubmit}>
                        <div className="col-sm-3">
                    <label className="visually-hidden" for="specificSizeInputName">rating</label>
                     <input type="number" className="form-control" id="specificSizeInputName" placeholder="Rating" value={rating} onChange={(e)=>setRating(e.target.value)}/>
                </div>
                <div className="col-sm-3">
                    <label className="visually-hidden" for="specificSizeInputGroupUsername">Description</label>
                    <div className="input-group">
                            <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="Description" value={description} onChange={(e)=> setDescription(e.target.value)} />
                    </div>
                    </div>

                    <div className="col-sm-3">
                    <label className="visually-hidden" for="specificSizeInputGroupUsername">House id</label>
                    <div className="input-group">
                            <input type="number" className="form-control" id="specificSizeInputGroupUsername" placeholder="housenumber" value={house_id} onChange={(e)=> setHouse_id(e.target.value)} />
                    </div>
                    </div>

                    <div className="col-1">
                         <button type="submit" className="btn btn-primary" ><GrFormAdd/></button>
                    </div>
                </form>
                
    

    
    
                </div>
            </div>

    <div className="container mt-4">
            <center>
                <h4>REVIEWS</h4>
            </center>
            <div  className="row taskList">

                {
                    reviews?.map((review)=> <ReviewItem review={review}/> )
                }


                


            </div> 
        </div>

        </>
    )
}


export default Review;