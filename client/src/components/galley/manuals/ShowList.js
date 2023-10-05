import React, { useState, useEffect } from 'react';
import '../../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from './Card';

function ShowGalleyManualList() {
  const [galleyManuals, setGalleyManual] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/galley/manuals')
      .then((res) => {
        setGalleyManual(res.data);
      })
      .catch((err) => {
        console.log('Error from Show Galley Manual List');
      });
  }, []);

  const galleyManualList =
    galleyManuals.length === 0
      ? 'there is no galley manual record!'
      : galleyManuals.map((galleyManual, k) => <Card galleyManual={galleyManual} key={k} />);

  return (
    <div className='ShowList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Galley Manual List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-galley-manual'
              className='btn btn-outline-warning float-right'
            >
              + Add New Manual
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{galleyManualList}</div>
      </div>
    </div>
  );
}

export default ShowGalleyManualList;




