import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import logo from "../../../assets/safety-manual.png";

const Card = (props) => {
  const bridgeManual = props.bridgeManual;

  return (
    <div className='card-container'>
      <img
        src={logo}
        alt='Bridge Manual'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-bridge-manual/${bridgeManual._id}`}>{bridgeManual.name}</Link>
        </h2>
        <h5>{bridgeManual.publisher}</h5>
        <p>{bridgeManual.lastEdition}</p>
      </div>
    </div>
  );
};
export default Card;