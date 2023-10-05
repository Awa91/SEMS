import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../App.css";

function UpdateEngineEquipInfo(props) {
  const [engineEquip, setEngineEquip] = useState({
    name: "",
    manufacturer: "",
    lastInspectionDate: "",
    description: "",
    totalNumber: "",
    location: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/engine/equipment/${id}`)
      .then((res) => {
        setEngineEquip({
          name: res.data.name,
          manufacturer: res.data.manufacturer,
          lastInspectionDate: res.data.lastInspectionDate,
          description: res.data.description,
          totalNumber: res.data.totalNumber,
          location: res.data.location,
        });
      })
      .catch((err) => {
        console.log("Error from Update Engine Equipment Info");
      });
  }, [id]);

  const onChange = (e) => {
    setEngineEquip({ ...engineEquip, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: engineEquip.name,
      manufacturer: engineEquip.manufacturer,
      lastInspectionDate: engineEquip.lastInspectionDate,
      description: engineEquip.description,
      totalNumber: engineEquip.totalNumber,
      location: engineEquip.location,
    };

    axios
      .put(`http://localhost:8082/api/engine/equipment/${id}`, data)
      .then((res) => {
        navigate(`/show-engine-equipment/${id}`);
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
            <Link to="/show-engine-equipment-list" className="btn btn-outline-warning float-left">
              Show Engine Equipment List
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
                placeholder="Name of the Equipment"
                name="name"
                className="form-control"
                value={engineEquip.name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="manufacturer">Manufacturer</label>
              <input
                type="text"
                placeholder="Manufacturer"
                name="manufacturer"
                className="form-control"
                value={engineEquip.manufacturer}
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
                value={engineEquip.lastInspectionDate}
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
                value={engineEquip.description}
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
                value={engineEquip.totalNumber}
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
                value={engineEquip.location}
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

export default UpdateEngineEquipInfo;
