import React, { useState, useEffect } from 'react';
import '../../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from './Card';

function ShowGalleyEquipList() {
  const [galleyEquips, setGalleyEquip] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/galley/equipment')
      .then((res) => {
        setGalleyEquip(res.data);
      })
      .catch((err) => {
        console.log('Error from Show Galley Equipment List');
      });
  }, []);

  const galleyEquipList =
    galleyEquips.length === 0
      ? 'there is no galley equipment record!'
      : galleyEquips.map((galleyEquip, k) => <Card galleyEquip={galleyEquip} key={k} />);

  return (
    <div className='ShowList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Galley Equipment List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-galley-equipment'
              className='btn btn-outline-warning float-right'
            >
              + Add New Equipment
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{galleyEquipList}</div>
      </div>
    </div>
  );
}

export default ShowGalleyEquipList;




