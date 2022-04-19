import React from "react";

import css from "./style.module.css";

const NomBurtgel = props => {  

  return (
    <div className={css.Order}>
      <p>
        Номын нэр : <strong>{props.nomAll.nomNer}</strong>
      </p>
      <p>
        Номын Зохиолч : {props.nomAll.nomZohiolch}
      </p>
      <p>
        Номын Код : {props.nomAll.nomId}
      </p>
      <p>
        Номын огноо : {props.nomAll.nomOgno}
      </p>
      <p>
        Номын агууллага : {props.nomAll.nomAguu}
      </p>
      <img src={props.nomAll.nomImg} style={{height: "250px"}} />
    </div>
  );
};

export default NomBurtgel;
