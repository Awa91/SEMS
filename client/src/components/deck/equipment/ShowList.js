import React, { useState, useEffect } from 'react';
import '../../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from './Card';

function ShowDeckEquipList() {
  const [deckEquips, setDeckEquip] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/deck/equipment')
      .then((res) => {
        setDeckEquip(res.data);
      })
      .catch((err) => {
        console.log('Error from Show Deck Equipment List');
      });
  }, []);

  const deckEquipList =
    deckEquips.length === 0
      ? 'there is no deck equipment record!'
      : deckEquips.map((deckEquip, k) => <Card deckEquip={deckEquip} key={k} />);

  return (
    <div className='ShowList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Deck Equipment List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-deck-equipment'
              className='btn btn-outline-warning float-right'
            >
              + Add New Equipment
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{deckEquipList}</div>
      </div>
    </div>
  );
}

export default ShowDeckEquipList;




