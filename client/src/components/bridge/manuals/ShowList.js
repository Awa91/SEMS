import React, { useState, useEffect } from 'react';
import '../../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from './Card';

function ShowBridgeManualList() {
  const [bridgeManuals, setBridgeManual] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/bridge/manuals')
      .then((res) => {
        setBridgeManual(res.data);
      })
      .catch((err) => {
        console.log('Error from Show Bridge Equipment List');
      });
  }, []);

  const bridgeManualList =
    bridgeManuals.length === 0
      ? 'there is no bridge equipment record!'
      : bridgeManuals.map((bridgeManual, k) => <Card bridgeManual={bridgeManual} key={k} />);

  return (
    <div className='ShowList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Bridge Manual List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-bridge-manual'
              className='btn btn-outline-warning float-right'
            >
              + Add New Manual
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{bridgeManualList}</div>
      </div>
    </div>
  );
}

export default ShowBridgeManualList;




