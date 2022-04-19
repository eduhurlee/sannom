import React from "react";

import css from "./style.module.css";

const SuragchBurtgel = props => {  

  return (
    <div className={css.Order}>
      <p>
        Сурагчийн овог : {props.allSuragch.suragchOvog}
      </p>
      <p>
        Сурагчийн нэр : {props.allSuragch.suragchNer}
      </p>
      <p>
        Сурагчийн анги : {props.allSuragch.angi}
      </p>
   
      <img src={props.allSuragch.suragchImg} style={{height: "250px"}} />
    </div>
  );
};

export default SuragchBurtgel;
