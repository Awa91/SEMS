import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../../../App.css';
import axios from 'axios';

function ShowEngineManualDetails(props) {
  const [engineManualDetails, setEngineManualDetails] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/engine/manuals/${id}`)
      .then((res) => {
        setEngineManualDetails(res.data);
      })
      .catch((err) => {
        console.log('Error from Show Engine Manual Details');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/engine/manuals/${id}`)
      .then((res) => {
        navigate('/show-engine-manual-list');
      })
      .catch((err) => {
        console.log('Error form Show Engine Manual Details_deleteClick');
      });
  };

  const EngineManualItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{engineManualDetails.name}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Publisher</td>
            <td>{engineManualDetails.publisher}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Last Edition</td>
            <td>{engineManualDetails.lastEdition}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Description</td>
            <td>{engineManualDetails.description}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Total Number</td>
            <td>{engineManualDetails.totalNumber}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Location</td>
            <td>{engineManualDetails.location}</td>
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
            <Link to='/show-engine-manual-list' className='btn btn-outline-warning float-left'>
              Show Engine Manual List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Engine Manual Record</h1>
            <p className='lead text-center'>View Manual Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{EngineManualItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(engineManualDetails._id);
              }}
            >
              Delete Manual
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-engine-manual/${engineManualDetails._id}`}
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

export default ShowEngineManualDetails;