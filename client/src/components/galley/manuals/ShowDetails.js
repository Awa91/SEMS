import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../../../App.css';
import axios from 'axios';

function ShowGalleyManualDetails(props) {
  const [galleyManualDetails, setGalleyManualDetails] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/galley/manuals/${id}`)
      .then((res) => {
        setGalleyManualDetails(res.data);
      })
      .catch((err) => {
        console.log('Error from Show Galley Manual Details');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/galley/manuals/${id}`)
      .then((res) => {
        navigate('/show-galley-manual-list');
      })
      .catch((err) => {
        console.log('Error form Show Galley Manual Details_deleteClick');
      });
  };

  const GalleyManualItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{galleyManualDetails.name}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Publisher</td>
            <td>{galleyManualDetails.publisher}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Last Edition</td>
            <td>{galleyManualDetails.lastEdition}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Description</td>
            <td>{galleyManualDetails.description}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Total Number</td>
            <td>{galleyManualDetails.totalNumber}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Location</td>
            <td>{galleyManualDetails.location}</td>
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
            <Link to='/show-galley-manual-list' className='btn btn-outline-warning float-left'>
              Show Galley Manual List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Galley Manual Record</h1>
            <p className='lead text-center'>View Manual Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{GalleyManualItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(galleyManualDetails._id);
              }}
            >
              Delete Manual
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-galley-manual/${galleyManualDetails._id}`}
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

export default ShowGalleyManualDetails;