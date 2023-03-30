
import './App.css';
import {Routes, Route, Link,useNavigate  } from "react-router-dom";

import React, { useState } from "react";
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import MovieCard from './component/MovieCard';
import Details from './component/Details';
import PrivateRoute from './component/PrivateRoute';

function App() {
  const navigate=useNavigate()
  const propriété=[{title:"Viking Wolf",
  description:"Juste après avoir emménagé dans une nouvelle ville, une adolescente assiste à un meurtre sauvage lors d'une soirée, et devient la proie de visions et de désirs étranges",
  posterURL:"/film1.jpg",
  sortie:"18 novembre 2022"
}, 
{title:"my name is vendetta",
description:"Après avoir vécu dans l'ombre pendant des années dans une ville tranquille du nord de l'Italie, un ancien tueur à gages du crime organisé et sa fille élaborent un plan de vengeance après que ses ennemis soient revenus pour traquer leur famille.",
posterURL:"https://www.tvguide.com/a/img/catalog/provider/1/2/1-12347133121.jpg",
sortie:""}, 

{title:"À l'Ouest, rien de nouveau",
 description:"Paul Baumer et quelques camarades incités par leurs professeurs, s'enrôlent très vite dans l'armée, prêts à servir leur patrie. À peine engagés, l'esprit volontaire fait place aux désillusions : leur instructeur, le caporal Himmelstoss, fait preuve d'un sadisme sans faille et les premières images du champ de bataille leur jette la réalité de la guerre en plein visage.",
  posterURL:"https://fr.web.img6.acsta.net/pictures/22/09/07/08/43/1050523.jpg",
  sortie:""}, 
  ]
  const [movies,setMovies] =useState (propriété)
  const handlesearch =(value)=>{
    setMovies(movies.filter((el)=>el.title === value))
  }
const [descrip,setDescrip]=useState("")
const[poster,setPoster]= useState ("")
  
const[text,setText]=useState("");
const [date,setDate]=useState("")
  const handeladd=()=>{
    const newMovie = {
      title :text,
      description:descrip,
      posterURL:poster,
      sortie: date
    }
    setMovies([...movies,newMovie])
    }
    
  return (
    <div className="App">
     <div>
     <input  type = "text" onChange={(e)=>setText(e.target.value)} placeholder="name of movie"/>
     <input  type = "text" onChange={(e)=>setDescrip(e.target.value)} placeholder="description of the movie"/>
     <input  type = "" onChange={(e)=>setPoster(e.target.value)} placeholder="the movie poster"/>  
     <input type="text" onChange={(e)=>setDate(e.target.value)} placeholder= "date du sortie"/>
     <button onClick={()=>handeladd()}>add movies</button>   
     
     </div>
     <Routes>
     <Route  path="/" element={<MovieList movie= {movies} /> }/> 
      <Route  path="Filtre" element ={ 
        <PrivateRoute>
      <Filter handlesearch={handlesearch}/>
      </PrivateRoute>
      }/>
      <Route path ="/details/:title" element={<Details movie= {movies}/>}/>
     </Routes>
     
    
   
    </div>
  );
}

export default App;
