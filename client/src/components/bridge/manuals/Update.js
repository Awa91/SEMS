import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../App.css";

function UpdateBridgeManualInfo(props) {
  const [bridgeManual, setBridgeManual] = useState({
    name: "",
    publisher: "",
    lastEdition: "",
    description: "",
    totalNumber: "",
    location: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/bridge/manuals/${id}`)
      .then((res) => {
        setBridgeManual({
          name: res.data.name,
          publisher: res.data.publisher,
          lastEdition: res.data.lastEdition,
          description: res.data.description,
          totalNumber: res.data.totalNumber,
          location: res.data.location,
        });
      })
      .catch((err) => {
        console.log("Error from Update Bridge Manual Info");
      });
  }, [id]);

  const onChange = (e) => {
    setBridgeManual({ ...bridgeManual, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: bridgeManual.name,
      publisher: bridgeManual.publisher,
      lastEdition: bridgeManual.lastEdition,
      description: bridgeManual.description,
      totalNumber: bridgeManual.totalNumber,
      location: bridgeManual.location,
    };

    axios
      .put(`http://localhost:8082/api/bridge/manuals/${id}`, data)
      .then((res) => {
        navigate(`/show-bridge-manual/${id}`);
      })
      .catch((err) => {
        console.log("Error in Update Bridge Info!");
      });
  };

  return (
    <div className="UpdateInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/show-bridge-manual-list" className="btn btn-outline-warning float-left">
              Show Bridge Equipment List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Equipment</h1>
            <p className="lead text-center">Update Equipment Info</p>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Name of the Manual"
                name="name"
                className="form-control"
                value={bridgeManual.name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="publisher">Publisher</label>
              <input
                type="text"
                placeholder="Publisher"
                name="publisher"
                className="form-control"
                value={bridgeManual.publisher}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="lastEdition">Last Edition</label>
              <input
                type="date"
                placeholder="Last Edition "
                name="lastEdition"
                className="form-control"
                value={bridgeManual.lastEdition}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                placeholder="Description of the Manual"
                name="description"
                className="form-control"
                value={bridgeManual.description}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="totalNumber">Total Number</label>
              <input
                type="number"
                placeholder="Total Number"
                name="totalNumber"
                className="form-control"
                value={bridgeManual.totalNumber}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                placeholder="Location(s) of the Equipment"
                name="location"
                className="form-control"
                value={bridgeManual.location}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type="submit"
              className="btn btn-outline-info btn-lg btn-block"
            >
              Update Equipment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateBridgeManualInfo;
