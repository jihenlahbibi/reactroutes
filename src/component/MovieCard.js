import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";



function  MovieCard ({mov}) {
  const navigate =useNavigate ();

return (
   <div style={{display:"flex",justifyContent:"center"}}>
   <Card style={{ width: '18rem',borderStyle:"inset",backgroundColor:"beige"}}>
      <Card.Img variant="" src={mov.posterURL}  style={{height:50,width:50}} />
      <Card.Body>
        <Card.Title>{mov.title}</Card.Title>
        <Card.Title>{mov.sortie}</Card.Title>
        <Card.Text> {mov.description} </Card.Text>
        <Button variant="primary" onClick={()=>navigate(`/details/${mov.title}`)}>More</Button>
      </Card.Body>
    </Card>
    







   </div> 
    
  );
}

export default  MovieCard;



