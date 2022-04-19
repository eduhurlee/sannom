import React from "react";
import { useState, useRef, useEffect } from "react";
import axios from "../../axios-nom";
import UploadAndDisplayImage from "./UploadAndDisplayImage"

const NomBurtgeh = () => {    
   const initialState =  {                     
        nomId: "",    
        nomNer: "", 
        nomZohiolch: "", 
        nomAguu: "", 
        nomOgno: "", 
        nomImg: ""             
    }
    
   const [state, setState] = useState(initialState);
   
   const changeId = e => {
    const newId=e.target.value;
    
    setState((stateBefore) => ({ 
      nomId: newId , 
      nomNer: stateBefore.nomNer , 
        nomZohiolch: stateBefore.nomZohiolch, 
        nomAguu: stateBefore.nomAguu, 
        nomOgno: stateBefore.nomOgno, 
        nomImg: stateBefore.nomImg 
    }));
  }; 
  
  const changeNer = e => {
    const newNer=e.target.value;
    
    setState((stateBefore) => ({ 
      nomId: stateBefore.nomId , 
      nomNer: newNer , 
        nomZohiolch: stateBefore.nomZohiolch, 
        nomAguu: stateBefore.nomAguu, 
        nomOgno: stateBefore.nomOgno, 
        nomImg: stateBefore.nomImg   
    }));
  }; 

  const changeZohiogch = e => {
    const newZohiolch=e.target.value;
    
    setState((stateBefore) => ({ 
      nomId: stateBefore.nomId , 
      nomNer: stateBefore.nomNer , 
        nomZohiolch: newZohiolch, 
        nomAguu: stateBefore.nomAguu, 
        nomOgno: stateBefore.nomOgno, 
        nomImg: stateBefore.nomImg   
    }));
  }; 

  const changeAguu = e => {
    const newAguu=e.target.value;
    
    setState((stateBefore) => ({ 
      nomId: stateBefore.nomId , 
      nomNer: stateBefore.nomNer , 
        nomZohiolch: stateBefore.nomZohiolch, 
        nomAguu: newAguu, 
        nomOgno: stateBefore.nomOgno, 
        nomImg: stateBefore.nomImg    
    }));
  };   

  const changeOgno = e => {
    const newOgno=e.target.value;
    
    setState((stateBefore) => ({ 
      nomId: stateBefore.nomId , 
      nomNer: stateBefore.nomNer , 
        nomZohiolch: stateBefore.nomZohiolch, 
        nomAguu: stateBefore.nomAguu, 
        nomOgno: newOgno, 
        nomImg: stateBefore.nomImg    
    }));
  }; 

  const changeImg = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);

    setState((stateBefore) => ({ 
      nomId: stateBefore.nomId , 
      nomNer: stateBefore.nomNer , 
        nomZohiolch: stateBefore.nomZohiolch, 
        nomAguu: stateBefore.nomAguu, 
        nomOgno: stateBefore.nomOgno, 
        nomImg:  base64   
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

    const nomBurtgeh = () => {        
        
        axios
        .post(`/nom.json`, state)
        .then(response => {
            console.log('amjilttai...');
        })
        .catch(error => {
            console.log("errrrrrrrrrrrrrrrrr" , error)
        }
        );           
    }
  return <div className="NomBurtgeh">
     
        <input type="text"  onChange={ changeId}  placeholder="Номын дугаар"/>
       
        <input type="text" onChange={ changeNer} placeholder="Номын нэр"/>
        <input  type="text" onChange={ changeZohiogch} placeholder="Зохиолч"/>
        <input  type="text" onChange={ changeAguu} placeholder="Агууллага"/>
        <input  type="text" onChange={ changeOgno} placeholder="Хэвлэгдсэн онгоо"/>
        <input
          type="file"
          label="Image"
          name="myFile"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => changeImg(e)}
        />
        <button onClick={nomBurtgeh}>Бүртгэх</button>  
  </div>
}

export default NomBurtgeh;