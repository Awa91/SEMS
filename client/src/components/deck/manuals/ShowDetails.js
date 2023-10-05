import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../../../App.css';
import axios from 'axios';

function ShowDeckManualDetails(props) {
  const [deckManualDetails, setDeckManualDetails] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/deck/manuals/${id}`)
      .then((res) => {
        setDeckManualDetails(res.data);
      })
      .catch((err) => {
        console.log('Error from Show Deck Manual Details');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/deck/manuals/${id}`)
      .then((res) => {
        navigate('/show-deck-manual-list');
      })
      .catch((err) => {
        console.log('Error form Show Deck Manual Details_deleteClick');
      });
  };

  const DeckManualItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{deckManualDetails.name}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Publisher</td>
            <td>{deckManualDetails.publisher}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Last Edition</td>
            <td>{deckManualDetails.lastEdition}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Description</td>
            <td>{deckManualDetails.description}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Total Number</td>
            <td>{deckManualDetails.totalNumber}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Location</td>
            <td>{deckManualDetails.location}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/show-deck-manual-list' className='btn btn-outline-warning float-left'>
              Show Deck Manual List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Deck Manual Record</h1>
            <p className='lead text-center'>View Manual Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{DeckManualItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(deckManualDetails._id);
              }}
            >
              Delete Manual
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-deck-manual/${deckManualDetails._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Manual
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDeckManualDetails;