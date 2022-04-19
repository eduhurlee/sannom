import React from "react";
import axios from "../../axios-nom";
import { useState, useEffect } from "react";

import BagshBurtgel from "../BagshBurtgel";


const Bagsh = () => {
  const initialState = {bagsh: []}
  const [state, setState] = useState(initialState)

  
 useEffect(() => {
   return () => {
    axios
    .get(`/bagsh.json`)
    .then(result => { 
      const bagsh = Object.entries(result.data).reverse();
      setState({bagsh: bagsh})
      })
    .catch(err => {
        console.log("aldaa............",err)
    });
   };
 },[])
   
  return <div>
      {state.bagsh.map(el => < BagshBurtgel key={el[0]} allBagsh={el[1]} /> )}
      <a href="/bagshBurtgeh"><button link="/bagshBurtgeh">Шинээр багш бүртгэх</button></a>
      
     </div>

};
  
  
  export default Bagsh;