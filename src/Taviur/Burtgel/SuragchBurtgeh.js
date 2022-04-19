import React from "react";
import { useState, useRef, useEffect } from "react";
import axios from "../../axios-nom";
import Suragch from "../Content/Suragch";

const SuragchBurtgeh = () => {    
   const initialState =  {                     
        suragchOvog: "",    
        suragchNer: "", 
        angi: "", 
        suragchImg: ""             
    };
    
   const [state, setState] = useState(initialState);
   
   const suragchOvog = e => {
    const newId=e.target.value;
    
    setState((stateBefore) => ({ 
      suragchOvog: newId , 
      suragchNer: stateBefore.suragchNer , 
        angi: stateBefore.angi, 
        suragchImg: stateBefore.suragchImg 
    }));
  }; 
  
  const suragchNer = e => {
    const newNer=e.target.value;
    
    setState((stateBefore) => ({ 
      suragchOvog: stateBefore.suragchOvog , 
      suragchNer: newNer , 
        angi: stateBefore.angi, 
        suragchImg: stateBefore.suragchImg   
    }));
  }; 

  const suragchAngi = e => {
    const newZohiolch=e.target.value;
    
    setState((stateBefore) => ({ 
      suragchOvog: stateBefore.suragchOvog , 
      suragchNer: stateBefore.suragchNer , 
        angi: newZohiolch, 
        suragchImg: stateBefore.suragchImg   
    }));
  }; 



  const changeImg = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);

    setState((stateBefore) => ({ 
      suragchOvog: stateBefore.suragchOvog , 
      suragchNer: stateBefore.suragchNer , 
        angi: stateBefore.angi, 
        suragchImg:  base64   
    }));
  }; 

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
   

    const suragchBurtgeh = () => {        
        
        axios
        .post(`/suragch.json`, state)
        .then(response => {
            console.log('suragch amjilttai...');
        })
        .catch(error => {
            console.log("suragch errrrrrrrrrrrrrrrrr" , error)
        }
        );     
        return <Suragch />      
    }   

    
  return <div className="BagshBurtgeh">     
        <input type="text"  onChange={ suragchOvog}  placeholder="Овог"/>       
        <input type="text" onChange={ suragchNer} placeholder="Нэр"/>
        <input  type="text" onChange={ suragchAngi} placeholder="Анги"/>
        
        <input
          type="file"
          label="Image"
          name="myFile"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => changeImg(e)}
          placeholder="Зураг"
        />
        <button onClick={suragchBurtgeh}>Бүртгэх</button>
  </div>
}

export default SuragchBurtgeh;