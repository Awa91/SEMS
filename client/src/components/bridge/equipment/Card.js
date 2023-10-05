import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import logo from "../../../assets/bridge-equip.png";

const Card = (props) => {
  const bridgeEquip = props.bridgeEquip;

  return (
    <div className='card-container'>
      <img
        src={logo}
        alt='Bridge Equipment'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-bridge-equipment/${bridgeEquip._id}`}>{bridgeEquip.name}</Link>
        </h2>
        <h6>{bridgeEquip.manufacturer}</h6>
        <p >{bridgeEquip.lastInspectionDate}</p>
        
      </div>
    </div>
  );
};
export default Card;