import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../App.css";

function UpdateEngineManualInfo(props) {
  const [engineManual, setEngineManual] = useState({
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
      .get(`http://localhost:8082/api/engine/manuals/${id}`)
      .then((res) => {
        setEngineManual({
          name: res.data.name,
          publisher: res.data.publisher,
          lastEdition: res.data.lastEdition,
          description: res.data.description,
          totalNumber: res.data.totalNumber,
          location: res.data.location,
        });
      })
      .catch((err) => {
        console.log("Error from Update Engine Manual Info");
      });
  }, [id]);

  const onChange = (e) => {
    setEngineManual({ ...engineManual, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: engineManual.name,
      publisher: engineManual.publisher,
      lastEdition: engineManual.lastEdition,
      description: engineManual.description,
      totalNumber: engineManual.totalNumber,
      location: engineManual.location,
    };

    axios
      .put(`http://localhost:8082/api/engine/manuals/${id}`, data)
      .then((res) => {
        navigate(`/show-engine-manual/${id}`);
      })
      .catch((err) => {
        console.log("Error in Update Engine Info!");
      });
  };

  return (
    <div className="UpdateInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/show-engine-manual-list" className="btn btn-outline-warning float-left">
              Show Engine Manual List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Manual</h1>
            <p className="lead text-center">Update Manual Info</p>
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
                value={engineManual.name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="publisher">Publisher</label>
              <input
                type="text"
                placeholder="Manufacturer"
                name="manufacturer"
                className="form-control"
                value={engineManual.manufacturer}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="lastInspectionDate">Last Inspection Date</label>
              <input
                type="date"
                placeholder="Last Inspection Date"
                name="lastInspectionDate"
                className="form-control"
                value={engineManual.lastEdition}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                placeholder="Description of the Book"
                name="description"
                className="form-control"
                value={engineManual.description}
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
                value={engineManual.totalNumber}
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
                value={engineManual.location}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type="submit"
              className="btn btn-outline-info btn-lg btn-block"
            >
              Update Manual
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateEngineManualInfo;
