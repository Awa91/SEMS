import React, { useState, useEffect } from 'react';
import '../../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from './Card';

function ShowBridgeEquipList() {
  const [bridgeEquips, setBridgeEquip] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/bridge/equipment')
      .then((res) => {
        setBridgeEquip(res.data);
      })
      .catch((err) => {
        console.log('Error from Show Bridge Equipment List');
      });
  }, []);

  const bridgeEquipList =
    bridgeEquips.length === 0
      ? 'there is no bridge equipment record!'
      : bridgeEquips.map((bridgeEquip, k) => <Card bridgeEquip={bridgeEquip} key={k} />);

  return (
    <div className='ShowList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Bridge Equipment List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-bridge-equipment'
              className='btn btn-outline-warning float-right'
            >
              + Add New Equipment
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{bridgeEquipList}</div>
      </div>
    </div>
  );
}

export default ShowBridgeEquipList;




