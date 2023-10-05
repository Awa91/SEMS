import React, { useState, useEffect } from 'react';
import '../../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from './Card';

function ShowDeckManualList() {
  const [deckManuals, setDeckManual] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/deck/manuals')
      .then((res) => {
        setDeckManual(res.data);
      })
      .catch((err) => {
        console.log('Error from Show Deck Manual List');
      });
  }, []);

  const deckManualList =
    deckManuals.length === 0
      ? 'there is no deck manual record!'
      : deckManuals.map((deckManual, k) => <Card deckManual={deckManual} key={k} />);

  return (
    <div className='ShowList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Deck Manual List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-deck-manual'
              className='btn btn-outline-warning float-right'
            >
              + Add New Manual
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{deckManualList}</div>
      </div>
    </div>
  );
}

export default ShowDeckManualList;




