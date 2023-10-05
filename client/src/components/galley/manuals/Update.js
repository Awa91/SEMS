import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../App.css";

function UpdateGalleyManualInfo(props) {
  const [galleyManual, setGalleyManual] = useState({
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
      .get(`http://localhost:8082/api/galley/manuals/${id}`)
      .then((res) => {
        setGalleyManual({
          name: res.data.name,
          publisher: res.data.publisher,
          lastEdition: res.data.lastEdition,
          description: res.data.description,
          totalNumber: res.data.totalNumber,
          location: res.data.location,
        });
      })
      .catch((err) => {
        console.log("Error from Update Galley Manual Info");
      });
  }, [id]);

  const onChange = (e) => {
    setGalleyManual({ ...galleyManual, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: galleyManual.name,
      publisher: galleyManual.publisher,
      lastEdition: galleyManual.lastEdition,
      description: galleyManual.description,
      totalNumber: galleyManual.totalNumber,
      location: galleyManual.location,
    };

    axios
      .put(`http://localhost:8082/api/galley/manuals/${id}`, data)
      .then((res) => {
        navigate(`/show-galley-manual/${id}`);
      })
      .catch((err) => {
        console.log("Error in Update Galley Info!");
      });
  };

  return (
    <div className="UpdateInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/show-galley-manual-list" className="btn btn-outline-warning float-left">
              Show Galley Manual List
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
                value={galleyManual.name}
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
                value={galleyManual.manufacturer}
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
                value={galleyManual.lastEdition}
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
                value={galleyManual.description}
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
                value={galleyManual.totalNumber}
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
                value={galleyManual.location}
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

export default UpdateGalleyManualInfo;
