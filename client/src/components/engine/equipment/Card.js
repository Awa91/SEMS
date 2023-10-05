import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';

const Card = (props) => {
  const engineEquip = props.engineEquip;

  return (
    <div className='card-container'>
      <img
        src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEngine_room&psig=AOvVaw3gyLL3IGO9z0t0DlasQtx6&ust=1696353947643000&source=images&cd=vfe&opi=89978449&ved=0CBIQ3YkBahcKEwiwspOL8deBAxUAAAAAHQAAAAAQEg'
        alt='Engine Equipment'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-engine-equipment/${engineEquip._id}`}>{engineEquip.name}</Link>
        </h2>
        <h3>{engineEquip.manufacturer}</h3>
        <p>{engineEquip.lastInspectionDate}</p>
      </div>
    </div>
  );
};





export default Card;