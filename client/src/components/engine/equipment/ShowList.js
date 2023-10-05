import React, { useState, useEffect } from 'react';
import '../../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from './Card';

function ShowEngineEquipList() {
  const [engineEquips, setEngineEquip] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/engine/equipment')
      .then((res) => {
        setEngineEquip(res.data);
      })
      .catch((err) => {
        console.log('Error from Show Engine Equipment List');
      });
  }, []);

  const engineEquipList =
    engineEquips.length === 0
      ? 'there is no engine equipment record!'
      : engineEquips.map((engineEquip, k) => <Card engineEquip={engineEquip} key={k} />);

  return (
    <div className='ShowList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Engine Equipment List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-engine-equipment'
              className='btn btn-outline-warning float-right'
            >
              + Add New Equipment
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{engineEquipList}</div>
      </div>
    </div>
  );
}

export default ShowEngineEquipList;




