import React from "react";
// import MenuItem from './MenuItem'

const Menu = () => {
  return <div className="Menu">
    <ul>
      <li link="/nom"><><a href="nom">Номын фонт</a></></li>
      <li link="/bagsh"><a href="Bagsh">Багш нар</a></li>
      <li link="/suragch"><a href="suragch">Сурагч</a></li>
    </ul>   
  </div>
}

export default Menu;