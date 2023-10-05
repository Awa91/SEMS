import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../App.css";

function UpdateDeckEquipInfo(props) {
  const [deckEquip, setDeckEquip] = useState({
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
      .get(`http://localhost:8082/api/deck/equipment/${id}`)
      .then((res) => {
        setDeckEquip({
          name: res.data.name,
          manufacturer: res.data.manufacturer,
          lastInspectionDate: res.data.lastInspectionDate,
          description: res.data.description,
          totalNumber: res.data.totalNumber,
          location: res.data.location,
        });
      })
      .catch((err) => {
        console.log("Error from Update Deck Equipment Info");
      });
  }, [id]);

  const onChange = (e) => {
    setDeckEquip({ ...deckEquip, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: deckEquip.name,
      manufacturer: deckEquip.manufacturer,
      lastInspectionDate: deckEquip.lastInspectionDate,
      description: deckEquip.description,
      totalNumber: deckEquip.totalNumber,
      location: deckEquip.location,
    };

    axios
      .put(`http://localhost:8082/api/deck/equipment/${id}`, data)
      .then((res) => {
        navigate(`/show-deck-equipment/${id}`);
      })
      .catch((err) => {
        console.log("Error in Update Deck Info!");
      });
  };

  return (
    <div className="UpdateInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/show-deck-equipment-list" className="btn btn-outline-warning float-left">
              Show Deck Equipment List
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
                value={deckEquip.name}
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
                value={deckEquip.manufacturer}
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
                value={deckEquip.lastInspectionDate}
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
                value={deckEquip.description}
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
                value={deckEquip.totalNumber}
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
                value={deckEquip.location}
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

export default UpdateDeckEquipInfo;
