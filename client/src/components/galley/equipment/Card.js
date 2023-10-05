import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';

const Card = (props) => {
  const galleyEquip = props.galleyEquip;

  return (
    <div className='card-container'>
      <img
        src=''
        height={200}
        alt='Galley Equipment'
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-galley-equipment/${galleyEquip._id}`}>{galleyEquip.name}</Link>
        </h2>
        <h3>{galleyEquip.manufacturer}</h3>
        <p>{galleyEquip.lastInspectionDate}</p>
      </div>
    </div>
  );
};

//



export default Card;