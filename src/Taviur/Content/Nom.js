import React from "react";
import axios from "../../axios-nom";
import { useState, useEffect } from "react";

import NomBurtgel from "../NomBurtgel";


const Nom = () => {
  const initialState = {nom: []}
  const [state, setState] = useState(initialState)

  
 useEffect(() => {
   return () => {
    axios
    .get(`/nom.json`)
    .then(result => { 
      const nom = Object.entries(result.data).reverse();
      setState({nom: nom})
      })
    .catch(err => {
        console.log("aldaa............",err)
    });
   };
 },[])
   
  return <div>
      {state.nom.map(el => < NomBurtgel key={el[0]} nomAll={el[1]} /> )}
      <a href="/nomBurtgeh"><button link="/nomBurtgeh">Шинэ ном бүртгэх</button></a>
      
     </div>

};
  
  
  export default Nom;