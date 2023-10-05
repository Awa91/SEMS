import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';

const Card = (props) => {
  const engineManual = props.engineManual;

  return (
    <div className='card-container'>
      <img
        src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Finstruction-manual.html&psig=AOvVaw0GoRcmwq4sfl3NM7JkavvT&ust=1696355177656000&source=images&cd=vfe&opi=89978449&ved=0CBEQjhxqFwoTCJDIqdP114EDFQAAAAAdAAAAABAD'
        alt='Engine Manual'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-engine-manual/${engineManual._id}`}>{engineManual.name}</Link>
        </h2>
        <h3>{engineManual.publisher}</h3>
        <p>{engineManual.lastEdition}</p>
      </div>
    </div>
  );
};
export default Card;