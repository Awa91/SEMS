import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const CreateDeckEquip = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [deckEquip, setDeckEquip] = useState({
    name: "",
    manufacturer: "",
    lastInspectionDate: "",
    description: "",
    totalNumber: "",
    location: "",
  });

  const onChange = (e) => {
    setDeckEquip({ ...deckEquip, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8082/api/deck/equipment", deckEquip)
      .then((res) => {
        setDeckEquip({
          name: "",
          manufacturer: "",
          lastInspectionDate: "",
          description: "",
          totalNumber: "",
          location: "",
        });

        // Push to /
        navigate("/show-deck-equipment-list");
      })
      .catch((err) => {
        console.log("Error in Create Deck equipment!");
      });
  };

  return (
    <div className="Create">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/show-deck-equipment-list" className="btn btn-outline-warning float-left">
              Show Deck Equipment List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Equipment</h1>
            <p className="lead text-center">Create new equipment</p>

            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
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
                <input
                  type="text"
                  placeholder="Manufacturer"
                  name="manufacturer"
                  className="form-control"
                  value={deckEquip.manufacturer}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="date"
                  placeholder="Last Inspection Date"
                  name="lastInspectionDate"
                  className="form-control"
                  value={deckEquip.lastInspectionDate}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Description of the equipment"
                  name="description"
                  className="form-control"
                  value={deckEquip.description}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="number"
                  placeholder="Total Number"
                  name="totalNumber"
                  className="form-control"
                  value={deckEquip.totalNumber}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Location(s) of this equipment"
                  name="location"
                  className="form-control"
                  value={deckEquip.location}
                  onChange={onChange}
                />
              </div>

              <input
                type="submit"
                className="btn btn-outline-warning btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDeckEquip;
