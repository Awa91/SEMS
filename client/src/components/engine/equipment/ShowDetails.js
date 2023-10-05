import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../../../App.css';
import axios from 'axios';

function ShowEngineEquipDetails(props) {
  const [engineEquipDetails, setEngineEquipDetails] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/engine/equipment/${id}`)
      .then((res) => {
        setEngineEquipDetails(res.data);
      })
      .catch((err) => {
        console.log('Error from Show Engine Equipment Details');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/engine/equipment/${id}`)
      .then((res) => {
        navigate('/show-engine-equipment-list');
      })
      .catch((err) => {
        console.log('Error form Show Engine Equipment Details_deleteClick');
      });
  };

  const EngineEquipItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{engineEquipDetails.name}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Manufacturer</td>
            <td>{engineEquipDetails.manufacturer}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Last Inspection Date</td>
            <td>{engineEquipDetails.lastInspectionDate}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Description</td>
            <td>{engineEquipDetails.description}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Total Number</td>
            <td>{engineEquipDetails.totalNumber}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Location</td>
            <td>{engineEquipDetails.location}</td>
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
            <Link to='/show-engine-equipment-list' className='btn btn-outline-warning float-left'>
              Show Engine Equipment List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Engine Equipment Record</h1>
            <p className='lead text-center'>View Equipment Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{EngineEquipItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(engineEquipDetails._id);
              }}
            >
              Delete Equipment
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-engine-equipment/${engineEquipDetails._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Equipment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowEngineEquipDetails;