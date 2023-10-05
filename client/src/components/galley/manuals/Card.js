import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';

const Card = (props) => {
  const galleyManual = props.galleyManual;

  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='Galley Manual'
        height={200}
      />
      <div className='desc'>
        <h2>
        <Link to={`/show-galley-manual/${galleyManual._id}`}>{galleyManual?.name}</Link>
        </h2>
        <h3>{galleyManual.publisher}</h3>
        <p>{galleyManual.lastEdition}</p>
      </div>
    </div>
  );
};
export default Card;