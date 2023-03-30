import React from "react";
import { useParams } from "react-router-dom";

const Details =({movie})=>{
const titre= useParams();
console.log("c'estle titre",titre);
const single = movie.find((el)=>el.title === titre.title);
console.log(single);

return (
    <div>
        <h1>movie details</h1>
        <h4>{single.description}</h4>
    </div>
)

}



export default Details;
