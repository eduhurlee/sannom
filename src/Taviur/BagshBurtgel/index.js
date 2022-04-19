import React from "react";

import css from "./style.module.css";

const BagshBurtgel = props => {  

  return (
    <div className={css.Order}>
      <p>
        Багшийн овог : {props.allBagsh.bagshOvog}
      </p>
      <p>
        Багшийн нэр : {props.allBagsh.bagshNer}
      </p>
      <p>
        Багшийн Тэнхим : {props.allBagsh.tenhim}
      </p>
   
      <img src={props.allBagsh.bagshImg} style={{height: "250px"}} />
    </div>
  );
};

export default BagshBurtgel;
