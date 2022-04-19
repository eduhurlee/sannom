import React from "react";
import axios from "../../axios-nom";
import { useState, useEffect } from "react";

import SuragchBurtgel from "../SuragchBurtgel";

const Suragch = () => {
  const initialState = {suragch: []}
  const [state, setState] = useState(initialState)
  
 useEffect(() => {
   return () => {
    axios
    .get(`/suragch.json`)
    .then(result => { 
      const suragch = Object.entries(result.data).reverse();
      setState({suragch: suragch})
      })
    .catch(err => {
        console.log("aldaa............",err)
    });
   };
 },[])
   
  return <div>
      {state.suragch.map(el => < SuragchBurtgel key={el[0]} allSuragch={el[1]} /> )}
      <a href="/suragchBurtgeh"><button link="/suragchBurtgeh">Шинээр сурагч бүртгэх</button></a>      
     </div>
};  
  
  export default Suragch;