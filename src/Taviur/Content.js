import React from "react";
import { BrowserRouter as useRouter, Routes, Route, Link } from "react-router-dom";

import Nom from "./Content/Nom"; 
import Bagsh from "./Content/Bagsh"; 
import Suragch from "./Content/Suragch"; 
import Home from "./Content/Home"; 
import Haisan from "./Content/Haisan"; 

import NomBurtgeh from "./Burtgel/NomBurtgeh";
import BagshBurtgeh from "./Burtgel/BagshBurtgeh";
import SuragchBurtgeh from "./Burtgel/SuragchBurtgeh";


const Content = () => {
  return (
      <div className="Content">          
        <Routes>
            <Route path="/nom" element={<Nom/>} ></Route>
            <Route path="/nomBurtgeh" element={<NomBurtgeh/>} ></Route>
            <Route path="/bagsh" element={<Bagsh/>}></Route> 
            <Route path="/bagshBurtgeh" element={<BagshBurtgeh/>}></Route> 
            <Route path="/suragchBurtgeh" element={<SuragchBurtgeh/>}></Route> 
            <Route path="/suragch" element={<Suragch/>} ></Route>
            <Route path="/haisan" element={<Haisan/>} ></Route>            
            <Route path="/" element={<Home/>} ></Route>
        </Routes>
      </div>
  
)  
}

export default Content;