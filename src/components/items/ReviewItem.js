import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import './ReviewItem.css'

function ReviewItem({review}){




    return(
        <>
        <div className="col-11 task_item">
            <div className="card" id="task_card" >
                <div className="card-body">
                    <h5>Rating: {review.rating}</h5>
                    <div>
                        <p className="textColor" id="description">{review.description}</p>
                    </div>

                    <div id="item_footer">
                        <h6 className="textColor"> <span>By: </span><span>{review.tenant.username}</span>  </h6> 
                    </div>

                    <div>
                    <h6 id="del_edit"><span><AiOutlineEdit/></span>  <span><AiOutlineDelete/></span></h6>
                    </div>
                    
                   
                  
                </div>
            </div>
        </div>  

    

        </>
    )
}

export default ReviewItem;