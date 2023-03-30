import React from "react";
import MovieCard from "./MovieCard";


const MovieList =({movie})=>{
    console.log(movie);

return (
<div style={{display:"flex"}}>
{movie.map((el,index)=>{
 return (<MovieCard  key ={index} mov={el}/>
 
 )


}
)
}



</div>

)}
 export default MovieList