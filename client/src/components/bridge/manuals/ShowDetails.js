import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../../../App.css';
import axios from 'axios';

function ShowBridgeManualDetails(props) {
  const [bridgeManualDetails, setBridgeManualDetails] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/bridge/manuals/${id}`)
      .then((res) => {
        setBridgeManualDetails(res.data);
      })
      .catch((err) => {
        console.log('Error from Show Bridge Manual Details');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/bridge/manuals/${id}`)
      .then((res) => {
        navigate('/show-bridge-manual-list');
      })
      .catch((err) => {
        console.log('Error form Show Bridge Manual Details_deleteClick');
      });
  };

  const BridgeManualItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{bridgeManualDetails.name}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Manufacturer</td>
            <td>{bridgeManualDetails.publisher}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Last Edition</td>
            <td>{bridgeManualDetails.lastEdition}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Description</td>
            <td>{bridgeManualDetails.description}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Total Number</td>
            <td>{bridgeManualDetails.totalNumber}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Location</td>
            <td>{bridgeManualDetails.location}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowBookDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/show-bridge-manual-list' className='btn btn-outline-warning float-left'>
              Show Bridge Manual List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Bridge Manual Record</h1>
            <p className='lead text-center'>View Manual Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{BridgeManualItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(bridgeManualDetails._id);
              }}
            >
              Delete Manual
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-bridge-manual/${bridgeManualDetails._id}`}
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

export default ShowBridgeManualDetails;