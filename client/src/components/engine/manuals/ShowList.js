import React, { useState, useEffect } from 'react';
import '../../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from './Card';

function ShowEngineManualList() {
  const [engineManuals, setEngineManual] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/engine/manuals')
      .then((res) => {
        setEngineManual(res.data);
      })
      .catch((err) => {
        console.log('Error from Show Engine Manual List');
      });
  }, []);

  const engineManualList =
    engineManuals.length === 0
      ? 'there is no engine manual record!'
      : engineManuals.map((engineManual, k) => <Card engineManual={engineManual} key={k} />);

  return (
    <div className='ShowList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Engine Manual List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-engine-manual'
              className='btn btn-outline-warning float-right'
            >
              + Add New Manual
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{engineManualList}</div>
      </div>
    </div>
  );
}

export default ShowEngineManualList;




