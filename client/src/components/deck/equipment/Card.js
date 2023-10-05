import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';

const Card = (props) => {
  const deckEquip = props.deckEquip;

  return (
    <div className='card-container'>
      <img
        src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Finstruction-manual.html&psig=AOvVaw2KOPojQWqlS38q0HYNi4jL&ust=1696353762636000&source=images&cd=vfe&opi=89978449&ved=0CBEQjhxqFwoTCMi_o7Dw14EDFQAAAAAdAAAAABAD'
        alt='Deck Equipment'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-deck-equipment/${deckEquip._id}`}>{deckEquip.name}</Link>
        </h2>
        <h3>{deckEquip.manufacturer}</h3>
        <p>{deckEquip.lastInspectionDate}</p>
      </div>
    </div>
  );
};

//

//bg img
//https://unsplash.com/photos/iPrYNHEBieE

//deck machinery
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kongsberg.com%2Fmaritime%2Fproducts%2Fdeck-machinery-and-cranes%2Fdeck-machinery%2F&psig=AOvVaw2JEJkTX_uPS1pqvNAyhcPV&ust=1696353857030000&source=images&cd=vfe&opi=89978449&ved=0CBEQjhxqFwoTCNid0-Tw14EDFQAAAAAdAAAAABAD


//Er
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEngine_room&psig=AOvVaw3gyLL3IGO9z0t0DlasQtx6&ust=1696353947643000&source=images&cd=vfe&opi=89978449&ved=0CBIQ3YkBahcKEwiwspOL8deBAxUAAAAAHQAAAAAQEg

//Galley
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.almaco.cc%2Fproducts%2Fcatering-systems%2Fgalleys-bars-pantries%2F&psig=AOvVaw0ebPxoeGaTH3RVBEG3ljU7&ust=1696354030571000&source=images&cd=vfe&opi=89978449&ved=0CBEQjhxqFwoTCJDaqrPx14EDFQAAAAAdAAAAABAD
export default Card;