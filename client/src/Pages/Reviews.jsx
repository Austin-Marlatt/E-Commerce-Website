import React from "react";
import Blogging from "../Components/Blog";
import EntryReviews from "../Components/EntryReview";

function Reviews() {
    return (
        <div>
            <img src="/src/public/images/banner-image.png" />
            <Blogging/>
            
            <EntryReviews/>
        </div>
    )
};//needs a place for entries!
export default Reviews;
//Exported to Main