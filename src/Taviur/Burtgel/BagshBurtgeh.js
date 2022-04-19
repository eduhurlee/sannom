import React from "react";
import { useState, useRef, useEffect } from "react";
import axios from "../../axios-nom";

const BagshBurtgeh = () => {    
   const initialState =  {                     
        bagshOvog: "",    
        bagshNer: "", 
        tenhim: "", 
        bagshImg: ""             
    };
    
   const [state, setState] = useState(initialState);
   
   const bagshOvog = e => {
    const newId=e.target.value;
    
    setState((stateBefore) => ({ 
      bagshOvog: newId , 
      bagshNer: stateBefore.bagshNer , 
        tenhim: stateBefore.tenhim, 
        bagshImg: stateBefore.bagshImg 
    }));
  }; 
  
  const BagshNer = e => {
    const newNer=e.target.value;
    
    setState((stateBefore) => ({ 
      bagshOvog: stateBefore.bagshOvog , 
      bagshNer: newNer , 
        tenhim: stateBefore.tenhim, 
        bagshImg: stateBefore.bagshImg   
    }));
  }; 

  const bagshTenhim = e => {
    const newZohiolch=e.target.value;
    
    setState((stateBefore) => ({ 
      bagshOvog: stateBefore.bagshOvog , 
      bagshNer: stateBefore.bagshNer , 
        tenhim: newZohiolch, 
        bagshImg: stateBefore.bagshImg   
    }));
  }; 



  const changeImg = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);

    setState((stateBefore) => ({ 
      bagshOvog: stateBefore.bagshOvog , 
      bagshNer: stateBefore.bagshNer , 
        tenhim: stateBefore.tenhim, 
        bagshImg:  base64   
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
   

    const bagshBurtgeh = () => {        
        
        axios
        .post(`/bagsh.json`, state)
        .then(response => {
            console.log('bagsh amjilttai...');
        })
        .catch(error => {
            console.log("bagsh errrrrrrrrrrrrrrrrr" , error)
        }
        );           
    }   

    
  return <div className="BagshBurtgeh">     
        <input type="text"  onChange={ bagshOvog}  placeholder="Овог"/>       
        <input type="text" onChange={ BagshNer} placeholder="Нэр"/>
        <input  type="text" onChange={ bagshTenhim} placeholder="Тэнхим"/>
        
        <input
          type="file"
          label="Image"
          name="myFile"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => changeImg(e)}
          placeholder="Зураг"
        />
        <button onClick={bagshBurtgeh}>Бүртгэх</button>
  </div>
}

export default BagshBurtgeh;