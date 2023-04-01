import React, {useEffect, useState} from "react";
import './Review.css'
import ReviewItem from "../items/ReviewItem";

function Review(){

    const [reviews, setReviews] = useState([])


    useEffect(()=>{
        fetch("http://127.0.0.1:3000/reviews")
        .then((r) => r.json())
        .then((r)=>setReviews(r.data))
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
                     <input type="text" className="form-control" id="specificSizeInputName" placeholder="Title" Value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="col-sm-6">
                    <label className="visually-hidden" for="specificSizeInputGroupUsername">Description</label>
                    <div className="input-group">
                            <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="Description" value={description} onChange={(e)=> setDescription(e.target.value)} />
                    </div>
                    </div>
                    <div className="col-sm-2">
                        <label className="visually-hidden" for="specificSizeSelect">Priority</label>
                        <select className="form-select" id="specificSizeSelect" value={priority} onChange={(e)=> setPriority(e.target.value)}>
                            <option selected>Rating...</option>
                            <option value="1">⭐</option>
                            <option value="2">⭐⭐</option>
                            <option value="3">⭐⭐⭐</option>
                            <option value="4">⭐⭐⭐⭐</option>
                            <option value="5">⭐⭐⭐⭐⭐</option>
                        </select>
                    </div>
                    <div className="col-1">
                         <button type="submit" className="btn btn-primary"><GrFormAdd/></button>
                    </div>
                </form>
                
    
    
    
    
                </div>
            </div>

    <div className="container mt-3" id="taskList">
            <center>
                <h4>REVIEWS</h4>
            </center>
            <div  className="row">

                {
                    reviews.map((review)=> <ReviewItem review={review}/> )
                }


                


            </div> 
        </div>

        </>
    )
}


export default Review;